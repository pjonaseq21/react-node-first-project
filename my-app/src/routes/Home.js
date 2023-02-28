import * as React from 'react';
import logo from "../public/logo.svg"
import { useState, useEffect } from "react";
import Alert from "./Alert"
import { View, StyleSheet} from 'react-native';
import Header from './Header';
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
        <Alert />
        <Header />
        <Boxes/>
        <Recent />
        </View >

    );
  }