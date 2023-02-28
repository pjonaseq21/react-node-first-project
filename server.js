const express = require('express')
const app = express()
const port = 3500
const moment = require('moment');
const http = require('http');
const fs = require("fs")
const multer  = require('multer')
var upload = multer({dest : './my-app/src/public/upload'}) 
const server = http.createServer().listen(3501)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
const cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
const mysql = require("mysql2")
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
app.use(bodyParser.json());

const config = require("./db")
let connection = mysql.createConnection(config);
function dateFormat(result){
  for(let i=0;i<result.length;i++){
    result[i].data = moment(result[i].data).format('YYYY-MM-DD');
    
   }
 
}



io.on('connection', (socket) => {
  console.log('Client connected');
  const numClients = io.engine.clientsCount;
    console.log(`Number of connected clients: ${numClients}`);
    socket.emit("data",numClients)
    socket.on('message', (data) => {
    console.log(`Message received: ${data}`);
    socket.emit('message', `Server received: ${data}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});



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
  connection.query(`SELECT * FROM posts where ID=${req.params.id}`,(err,result)=>{
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
  connection.query(`INSERT INTO posts(title,text,photo,data) VALUES("${req.body.title}","${req.body.text}","${randomNumber}.jpg",CURDATE()) `)
  res.redirect("http://localhost:3000/" )
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})