import { DataSource } from "typeorm";
import { Start } from "./entity/Start";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db_bluebox",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "bluebox",
  synchronize: true,
  logging: true,
  entities: [Start],
  subscribers: [],
  migrations: [],
});
