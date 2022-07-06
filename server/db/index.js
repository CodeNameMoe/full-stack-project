import pg from "pg";
import "dotenv/config";

export const pool = new pg.Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER, 
    database: process.env.PGDATABASE, 
    port: process.env.PGPORT, 
    password: process.env.PGPASSWORD,
    ssl:{rejectUnauthorized: false}
    });






