import "./App.css"
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import Post from './routes/Post'
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



  return (
    <Router>
      <Routes>
        <Route path="/post/:id" element={<Post/>} />
        <Route path='/' element={<Home />} />
      
        <Route path="/admin" element={<Admin/>} />
        <Route path='/users' element={<Users/>} />

      


      </Routes>
    
    </Router>



  );
  
}

export default App;
