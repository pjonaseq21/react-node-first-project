import * as React from 'react';
import logo from "../public/logo.svg"
import { useState, useEffect } from "react";

import { View, StyleSheet} from 'react-native';
import Boxes from './Boxes'
import Recent from './Recent'
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: "100vh",
    boxSizing: "border-box"
  },
  header: {
    fontFamily: "Bufallo",
    fontSize: "15px",
    width: "100%",
    height: "69px",
    alignItems: 'center',
    display: "inline",
    flexDirection: "row",
    backgroundColor: 'white'    
  },  
  logo:{
    height: '40px',

  },
 
  header_h1:{
    display: "flex",
   alignItems: "start",
    fontSize: "35px",
    fontFamily : "UbuntuMono"
  },
  navbar:{
    width: "80%",
    marginLeft: "auto",
    height: '68px',
    marginRight: "auto",
    display: "flex",
    padding: '1rem',
    alignItems: "center",

  },
  navbar_item:{
    display: "flex",
    alignItems: "center",
    paddingTop: "20px",
    height: "69px",
    fontSize: "15px",
  }
});


export default function Home() {
  
    return (
      <View style={styles.container}>
        
        <div id='header-container' style={styles.header}>
          <nav style={styles.navbar}>
          <img id='logo' src={logo} style={styles.logo}></img>
          <span id='header-h1' style={styles.header_h1}>Smart<strong>Thinking</strong></span>
          <span id='header' style={styles.navbar_item}>News</span>
          <span id='header' style={styles.navbar_item}>Popular</span>
          <span id='header' style={styles.navbar_item}>About</span>
          </nav>
          </div>
        <Boxes/>
        <Recent />
        </View >

    );
  }