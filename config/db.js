import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Aiven DB connection failed:", err);
  } else {
    console.log("✅ Connected to Aiven Database");
  }
});

export default db;
