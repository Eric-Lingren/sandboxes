require('dotenv').config()

module.exports = {
  'development': {
    'username': process.env.DB_USER_DEVELOPMENT,
    'password': process.env.DB_PASSWORD_DEVELOPMENT,
    'database': process.env.DB_NAME_DEVELOPMENT,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT
  },
  'test': {
    'username': process.env.DB_USER_TEST,
    'password': process.env.DB_PASSWORD_TEST,
    'database': process.env.DB_NAME_TEST,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT
  },
  'production': {
    'username': process.env.DB_USER_PRODUCTION,
    'password': process.env.DB_PASSWORD_PRODUCTION,
    'database': process.env.DB_NAME_PRODUCTION,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT
  },
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV 
}