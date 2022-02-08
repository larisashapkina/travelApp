const pgPromise = require("pg-promise")();
require("dotenv").config();

const db = pgPromise({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
});


// db.any("SELECT * FROM places")
//     .then((data)=>{
//         console.log(data);
//         console.log("Trigger");
//     })

/** if you want to run your database from this file, you will put the code above,
 * then comment out module.exports =db;
 * cd to backend and install -npm install pg-promise
 * cd to backend again 
 * run - node db/dbConfig.js
 */

module.exports = db;