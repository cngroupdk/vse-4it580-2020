import mariadb from 'mariadb';

export const getConnection = async () => {
  try {
    let conn;
    if (!conn) {
      conn = await mariadb.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
    }
    return conn;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
};
