require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors, celebrate, Joi } = require('celebrate');
const cookieParser = require('cookie-parser');
// eslint-disable-next-line import/no-unresolved
const cors = require('cors');
const { login, createUser } = require('./controllers/user');
const auth = require('./middlewares/auth');
const regExp = require('./utils/regexp');
const NotFoundError = require('./errors/not-found-error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
app.use(cors({
  origin: ['https://domainname.students.nomoredomains.rocks', 'http://domainname.students.nomoredomains.rocks'],
  allowedHeaders: ['Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin', 'Content-Type'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
}, (err) => {
  if (err) {
    console.error('Unable to connect to mongodb', err);
  }
});

app.use(requestLogger);
app.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    }),
  }),
  login,
);
app.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(regExp),
    }),
  }),
  createUser,
);
app.use(auth);
app.use('/users', require('./routes/user'));
app.use('/cards', require('./routes/card'));

app.post('/signout', (req, res) => {
  res.status(200).clearCookie('jwt', {
    domain: '.onemoreproject.nomoredomains.rocks',
    httpOnly: false,
    sameSite: false,
    secure: false,
  }).send({ message: 'Выход' });
});

app.use((req, res, next) => {
  next(new NotFoundError('Пока запрашиваемой вами страницы нет, но не отчаивайтесь, возмоно она появится'));
});

app.use(errorLogger);
app.use(errors());

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // Прописываем дефолты на случай если внезапно прилетело что-то неожиданное
  res.status(err.statusCode || 500);
  res.send({ message: err.message || 'Неизвестная ошибка' });
});

app.listen(3000, () => {
  console.info('App listening on port 3000');
});
