import { Sequelize } from "sequelize-typescript";

const connection = new Sequelize({
  dialect: "mysql",
  host: "reservation-service-db-service",
  username: "reservation-app-user",
  password: "reservation-secret-123",
  database: "reservation-db",
  logging: false,
  //models: [User],
});

export default connection;