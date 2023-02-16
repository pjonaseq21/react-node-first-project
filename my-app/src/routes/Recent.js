import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Link} from "react-router-dom";
import planets from "../public/planets.jpg"
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
    container: {
      width: "80%",
      height: "800px",
      justifyContent: "start",
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '20px', 

    },
    box:{
        display: "inline",
        width: '100%',
        height: "80%",
        padding: 5,
        justifyContent: "start",
        flexDirection: 'column',
    }
 ,
      containerforarticles:{
        width: "100%",
      height: "100%",
      justifyContent: "start",
      marginBottom: '10px', 
      flexDirection: "column",
      }
    
})

export default function Recent() {

  const [data, setData] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);
  const [dataThird, setDataThird] = useState([]);

  useEffect(() => {
    async function FetchData(){
    await fetch(`http://localhost:3500/getrecent`)
      .then((response) =>  response.json())
      .then((actualData) => {
        setData([actualData.result[0]]);
        setDataSecond([actualData.result[1]])
        setDataThird([actualData.result[2]])
    });
}FetchData()

}, []);
const boxesRecent = data.map((item, index) => {
  const photo = require(`../public/upload/${item.photo}`);

  return (
    <a href={`/post/${item.id}`}>

    <div
      key={index}
      style={{
        width: "100%",
        backgroundPosition: "50%",
        borderRadius: "10px",
        display: "flex",
        paddingLeft: "10px",
        marginBottom: "0px",
        height: "100%",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white",
      }}
    >
      <span id="Title-of-post">{item.data}</span>
      <span id="Title-of-post">{item.title}</span>
    </div>
    </a>
  );
});
const boxesRecentSecond = dataSecond.map((item, index) => {
  const photo = require(`../public/upload/${item.photo}`);

  return (
    <a href={`/post/${item.id}`}>
    <div
      key={index}
      style={{
        width: "100%",
        backgroundPosition: "50%",
        borderRadius: "10px",
        display: "flex",
        paddingLeft: "10px",
        marginBottom: "0px",
        height: "100%",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white",
      }}
    >
      <span id="Title-of-post">{item.data}</span>
      <span id="Title-of-post">{item.title}</span>
    </div>
    </a>
  );
});

const boxesRecentThird = dataThird.map((item, index) => {
  const photo = require(`../public/upload/${item.photo}`);

  return (
    <a href={`/post/${item.id}`}>

    <div
      key={index}
      style={{
        width: "100%",
        backgroundPosition: "50%",
        borderRadius: "10px",
        display: "flex",
        paddingLeft: "10px",
        marginBottom: "0px",
        height: "100%",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white",
      }}
    >
      <span id="Title-of-post">{item.data}</span>
      <span id="Title-of-post">{item.title}</span>
    </div>
    </a>
  );
});
    return (
        
      <View style={styles.container}>
        <span id='recent'><strong>Recent Posts</strong></span>
        <View style={styles.containerforarticles}>

        <div id='recent-1' style={styles.box}> 

           {boxesRecent} 
        </div>

        <div id='recent-2' style={styles.box}> 
        {boxesRecentSecond} 
  
        </div>

        <div id='recent-3' style={styles.box}> 
        {boxesRecentThird} 
 
        </div>
        </View>

      </View>
    );
  }