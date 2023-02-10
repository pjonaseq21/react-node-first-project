const express = require('express')
const app = express()
const port = 3500
const fs = require("fs")
const router = express.Router();
const multer  = require('multer')
var upload = multer({dest : './my-app/src/routes/upload'}) 

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
let cors = require("cors");
const mysql = require("mysql2")


app.use(bodyParser.json());
app.use(cors());

const config = require("./db")
let connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  connection.query("SELECT * FROM posts",(err,result)=>{
    console.log(result)
    if(err){
      console.log(err)
    }
    res.json({result:result})
  })
})
app.post("/admindata",upload.single('file'),(req,res)=>{
  console.log(req.file)
  fs.rename(req.file.path,`./my-app/src/routes/upload/${req.body.title}.jpg`,(err)=>{
    console.log(err)
  })
  connection.query(`INSERT INTO posts(title,text,photo) VALUES("${req.body.title}","${req.body.text}","${req.body.title}.jpg") `)
  res.redirect("http://localhost:3000/")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})