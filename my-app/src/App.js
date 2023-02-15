import "./App.css"
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import Boxes from './routes/Boxes'

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
        <Route path='/' element={<Home />} />
      
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path='/users' element={<Users/>} />

      


      </Routes>
    
    </Router>



  );
  
}

export default App;
