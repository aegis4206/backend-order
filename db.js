require('dotenv').config();

const { Client } = require('pg');

const pool = new Client({
    connectionString: process.env.connectionString +"?sslmode=require"
})

pool.connect();
module.exports = pool;