const Config = {
  appConfig: {
    port: process.env.APP_PORT,
  },
  db: {
    host: "@cluster.hrdqg.mongodb.net",
    port: process.env.DB_PORT,
    dbName: "makeupsol",
    password: "makeupsol",
    user: "admin",
  },
};

module.exports = Config;
