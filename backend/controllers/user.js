const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const InternalError = require('../errors/internal-error');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ConflictError = require('../errors/conflict-error');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({users}))
    .catch(() => next(new InternalError()));
};

module.exports.getCurrentUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      res.send({ user });
    })
    .catch(() => next(new InternalError()));
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (user) {
        res.send({user});
      } else {
        next(new NotFoundError('Пользователь не найден'));
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы неверные данные'));
      } else {
        next(new InternalError());
      }
    });
};

module.exports.createUser = (req, res, next) => {
  const {
    email, password, name, about, avatar,
  } = req.body;
  if (validator.isEmail(email) !== true) {
    next(new BadRequestError('То что вы ввели - не email'));
    return;
  }
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email, password: hash, name, about, avatar,
    })
      .then((user) => res.status(201).send({ user })))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы неверные данные'));
      } else if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new ConflictError('У нас уже есть пользователь с таким email, ты точно еще не регистрировался?'));
      } else {
        next(new InternalError());
      }
    });
};

module.exports.updateUserInfo = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, {name, about}, {new: true, runValidators: true})
    .then((user) => {
      if (user) {
        res.send({ user });
      } else {
        next(new NotFoundError('Пользователь не найден'));
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        next(new BadRequestError('Переданы неверные данные'));
      } else {
        next(new InternalError());
      }
    });
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (user) {
        res.send({ user });
      } else {
        next(new NotFoundError('Пользователь не найден'));
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        next(new BadRequestError('Переданы неверные данные'));
      } else {
        next(new InternalError());
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  const hour = 3600000;
  const week = hour * 24 * 7;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res
        .cookie('jwt', token, {
          domain: '.onemoreproject.nomoredomains.rocks',
          maxAge: week,
          httpOnly: false,
          sameSite: false,
          secure: false,
        })
        .end();
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });
};
