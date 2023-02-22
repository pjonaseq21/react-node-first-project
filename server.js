const express = require('express')
const app = express()
const port = 3500
const moment = require('moment');

const fs = require("fs")
const router = express.Router();
const multer  = require('multer')
var upload = multer({dest : './my-app/src/public/upload'}) 

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
let cors = require("cors");
const mysql = require("mysql2")
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.use(bodyParser.json());
app.use(cors());

const config = require("./db")
let connection = mysql.createConnection(config);
function dateFormat(result){
  for(let i=0;i<result.length;i++){
    result[i].data = moment(result[i].data).format('YYYY-MM-DD');
    
   }
 
}
app.get('/', (req, res) => {
  connection.query("SELECT * FROM posts",(err,result)=>{
    dateFormat(result)
  
    if(err){
      console.log(err)
    }
    res.json({result:result[0],resultSecond: result[1],})
  })
})
app.get("/getrecent",(req,res)=>{
  
  connection.query("SELECT * FROM posts ORDER BY id DESC",(err,result)=>{
   dateFormat(result)
    res.json({result:result})
  })
})
app.get("/post/:id",(req,res)=>{
  connection.query(`SELECT * FROM posts where id=${req.params.id}`,(err,result)=>{
    dateFormat(result)
    console.log(result)
    res.json({result:result})
  })
})
app.post("/admindata",upload.single('file'),(req,res)=>{
  let randomNumber = getRandomInt(1000)
  console.log(req.body.id)
  fs.rename(req.file.path,`./my-app/src/public/upload/${randomNumber}.jpg`,(err)=>{
    console.log(err)
  })
  connection.query(`INSERT INTO posts(title,text,photo,data) VALUES("${req.body.title}","${req.body.text}","${randomNumber}.jpg","curdate()") `)
  res.redirect("http://localhost:3000/")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})