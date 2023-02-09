import photoone from "../public/books.jpg"
import phototwo from "../public/AI.jpg"

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
      justifyContent: "flex-end",
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
          <View style={styles.inner}>
          <Link to="/users">          
          <span id="text-data">09-02-2023</span><br></br>
          <span id="text"><strong>Czy maszyny nas zastąpią?</strong></span>
          </Link>

          </View>                      
        </View>
      </View>
    );
  }