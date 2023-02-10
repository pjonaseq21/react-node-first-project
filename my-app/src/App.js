import "./App.css"
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

import Admin from "./routes/Admin"
import { View, StyleSheet } from 'react-native';
import Home from "./routes/Home"
import Users from "./routes/Users"
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: '100vh' 
  },  
});
function App() {


  useEffect(() => {
    fetch("http://localhost:3500/")
    .then((response) =>response.json())
    .then((data) =>  {
      let test = document.getElementById("test")
      let test1 = document.getElementById("test1")
      let test2 = document.getElementById("test2")
      console.log(data.result[0].email)
      test.innerHTML = ` ${data.result[0].id} `;
      test1.innerHTML = ` ${data.result[0].email} `;
      test2.innerHTML = ` ${data.result[0].password} `;

    }).catch(err => {
    })
    
  },[]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/admin" element={<Admin/>}></Route>
        <Route path='/users' element={<Users/>} />

      


      </Routes>
    
    </Router>



  );
  
}

export default App;
