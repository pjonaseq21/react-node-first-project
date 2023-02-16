import photoone from "../public/books.jpg"
import phototwo from "../public/AI.jpg"
import { useState, useEffect } from "react";

import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Link} from "react-router-dom";
const styles = StyleSheet.create({
    container: {
      width: "80%",
      height: "200px",
      display: "flex",
      justifyContent: "start",
      marginLeft: 'auto',
      marginRight: 'auto',
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
        setDataSecond([actualData.resultSecond])
    });
}FetchData()

}, []);

const boxes = data.map((item, index) => {
  const photo = require(`../public/upload/${item.photo}`);

  return (
    <div
      key={index}
      style={{
        display: "flex",
        width: "50%",
        backgroundPosition: "50%",
        height: "200px",
        paddingLeft: "10px",
        marginLeft: "10x",
        borderRadius: "10px",
        color: "white",
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-between",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25))",
      }}
    >
      <span id="Title-of-post-header">{item.title}</span>
      <span id="Title-of-post-data">{item.data}</span>

    </div>
  );
});
const boxesSecond = dataSecond.map((item, index) => {
  const photo = require(`../public/upload/${item.photo}`);

  return (
    <div
      key={index}
      style={{
        display: "flex",
        width: "50%",
        backgroundPosition: "50%",
        height: "200px",
        paddingLeft: "10px",
        marginLeft: "10x",
        borderRadius: "10px",
        color: "white",
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-between",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25))",

      }}
    >
      <span id="Title-of-post-header">{item.title}</span>
      <span id="Title-of-post-data">{item.data}</span>

    </div>
  );
});
      return(
        <div style={styles.container}>
        {boxes}
        {boxesSecond}
        </div>
      )
    }