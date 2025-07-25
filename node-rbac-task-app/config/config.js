// require('dotenv').config();
// module.exports = {
//   development: {
//     url: process.env.DB_URL,
//     dialect: process.env.DB_DIALECT
//   }
// };


require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,       // This is what Neon requires
        rejectUnauthorized: false, // Allow self-signed certs
      },
    },
  },
};
