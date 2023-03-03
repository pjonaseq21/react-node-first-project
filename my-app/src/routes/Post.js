import * as React from 'react';
import { useState, useEffect  } from "react";
import { useParams } from 'react-router-dom';
import Header from "./Header"


export default function Post(){
    const [data, setData] = useState([]);
    const { id } = useParams();


  useEffect(() => {
    async function FetchData(){
    await fetch(`http://localhost:3500/post/${id}`)
      .then((response) =>  response.json())
      .then((actualData) => {
        setData([actualData.result[0]]);
        
    });
}FetchData()
  },[id]);
const Post = data.map((item, index) => {
  const photo = require(`../public/upload/${item.photo}`);
  return (
    <div id='container-post'>
   <strong><span id='Title-post'>{item.title}</span></strong><br/>
   <span>{item.text}</span>
    <div
    key={item.ID.toString()}
      style={{
        width: "100%",
        marginTop: "20px",
        backgroundPosition: "50%",
        borderRadius: "10px",
        display: "flex",
        height: "300px",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-between",
        color: "white",
      }}>
           <span id="Title-of-post-data">{item.data}</span>
      </div>
      </div>
    
  );
});
    return (
        <div>

        <Header />
           {Post}


        </div>
    )
  }