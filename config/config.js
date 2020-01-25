module.exports ={
    "development": {
      "username": "root",
      "password": process.env.DEV_PASSWORD,
      "database": "pollApp_dev",
      "host": "mysql://b2bfa872bbbe6f:cbc74f59@us-cdbr-iron-east-05.cleardb.net/heroku_b7872ff6bb385b5?reconnect=true",
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
  