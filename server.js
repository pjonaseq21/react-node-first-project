const express = require('express')
const app = express()
const port = 3500

let cors = require("cors");
const mysql = require("mysql2")

app.use(cors());
const config = require("./db")
let connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  connection.query("SELECT * FROM users",(err,result)=>{
    console.log(result)
    if(err){
      console.log(err)
    }
    res.json({result:result})
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})