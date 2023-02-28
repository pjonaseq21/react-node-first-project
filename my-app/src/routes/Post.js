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
        setData([actualData.result]);
        
    });
}FetchData()

}, []);
    return(
        <div>

        <Header />
        </div>
    )
}