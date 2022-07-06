import {pool} from "../index";
import "dotenv/config";



 async function createTable(){
    const queryStr = "CREATE TABLE IF NOT EXISTS user_table (user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username TEXT, weight INT, date DATE );";
    const response = await pool.query(queryStr);
    console.log(response.command)
}

createTable();