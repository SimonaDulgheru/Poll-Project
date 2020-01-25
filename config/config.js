module.exports ={
    "development": {
      "username": "root",
      "password": process.env.DEV_PASSWORD,
      "database": "pollApp_dev",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": process.env.DEV_PASSWORD,
      "database": "pollApp_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": process.env.DEV_PASSWORD,
      "database": "pollApp_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
  