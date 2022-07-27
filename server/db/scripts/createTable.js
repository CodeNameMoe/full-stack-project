import pg from "pg";

import { query } from "../index.js";

const queryStr = `CREATE TABLE IF NOT EXISTS user_table (user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username TEXT, weight INT, date DATE );`;

async function createTable() {
  const res = await query(queryStr);
  console.log(await res.command);
}

createTable();
