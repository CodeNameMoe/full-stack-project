import {pool} from "../index";


let queryString = "DROP TABLE IF EXISTS user_table;"

async function dropTable() {
    const response = await pool.query(queryString);
    console.log(response.command)
}

dropTable();

