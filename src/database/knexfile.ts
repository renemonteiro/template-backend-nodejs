import path from "path";

export const knexfile = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "seeds"),
  },
  useNullAsDefault: true,
};
