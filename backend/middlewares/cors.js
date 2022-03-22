const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const ALLOWED_CORS = [
  'http://localhost:3000',
  'https://localhost:3000',
  'http://domainname.students.nomoredomains.rocks',
  'https://domainname.students.nomoredomains.rocks',

];

module.exports = (req, res, next) => {
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const { origin } = req.headers;
  console.log(origin);
  console.log(method);

  if (ALLOWED_CORS.includes(origin)) {
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Credentials', 'true');
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.end();
  }

  next();
};
