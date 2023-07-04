const mysql = require("mysql2/promise");

let connection;
const connect = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "q1w2e3r4",
      database: "mytodo",
    });
    console.log("change connection");
  }
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, getConnection };
