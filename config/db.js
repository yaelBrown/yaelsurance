const { createPool } = require("mysql2")

const dbConfig = {
  host: process.env.DB_HOSTNAME || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_DATABASE || "yaelsurance"
}

const pool = createPool(dbConfig)

pool.getConnection(err => {
  if (err) {
    console.error("error connecting to database: " + err)
  } else {
    (process.env.NODE_ENV === "development") ? console.log("Connected to Database: \n" + JSON.stringify(dbConfig)) : console.log("Connected to Database")
  }
})

export default pool