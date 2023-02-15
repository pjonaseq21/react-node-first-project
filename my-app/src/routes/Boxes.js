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
  const [data, setData] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);

  useEffect(() => {
    async function FetchData(){
    await fetch(`http://localhost:3500/`)
      .then((response) =>  response.json())
      .then((actualData) => {
        setData([actualData.result]);
    });
}FetchData()

}, []);

const boxes = data.map((item, index) => {
  const photo = require(`../public/upload/${item.photo}`);

  return (
    <div
      key={index}
      style={{
        width: "100%",
        height: "500px",
        backgroundImage: `url(${photo})`
      }}
    >
      <span>TEST</span>
    </div>
  );
});
      return(
        <div>{boxes}</div>
      )
    }