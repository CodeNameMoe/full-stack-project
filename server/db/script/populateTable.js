import userData from "../../libs/UserData";

import {pool} from "../index";

const queryString = "INSERT INTO user_table (username, weight, date) VALUES ($1, $2, $3) RETURNING *; "

async function populateTable() {
    for(let i=0; i < userData.length; i++) {
        const queryParams = [userData[i].username, userData[i].weight, userData[i].date ];
        let response = await pool.query(queryString, queryParams)
        console.log(response.command)
    }
}

populateTable();