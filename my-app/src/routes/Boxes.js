import photoone from "../public/books.jpg"
import phototwo from "../public/AI.jpg"
import { useState, useEffect } from "react";

import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Link} from "react-router-dom";
const styles = StyleSheet.create({
    container: {
      width: "80%",
      height: "40%",
      justifyContent: "center",
      marginLeft: 'auto',
      marginRight: 'auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: '10px',    
    },
    box: {
      width: "50%",
      height: "100%",
      padding: 7
    },
    inner: {
      backgroundImage: `url(${phototwo})`,
      
      flex: 1,
      justifyContent: 'flex-end',
      flexWrap:  "wrap",
      padding: "1rem",

    }, innerone: {
      flexWrap:  "wrap",
      padding: "1rem",
      justifyContent: "flex-end",
      backgroundImage: `url(${photoone})`,
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      height: "100%",

    },
    span:{
      color: "white",

    },
   
  });

export default function Boxes() {
  let [data, setData] = useState({})
  let [dataSecond,setDataSecond] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3500/`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.result);
        setDataSecond(actualData.result[1]);
      });
  }, []);
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.innerone} >
          <Link to="/users">          
          <span id="text-data">09-02-2023</span><br></br>
          <span id="text"><strong>Najlepsze książki w 2023</strong></span>
          </Link>
          </View>                      
        </View>
        <View style={styles.box}>
        
        {Object.keys(data).map(function(index, value) {
          console.log(data)
          return(
          <div key={index} style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${require(`../public/upload/${data.photo}`)})`
          }}>
            <span>TEST</span>
          </div>
         ) })
        }
        </View>
      </View>
    );
  }