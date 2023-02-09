import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Link} from "react-router-dom";
import planets from "../public/planets.jpg"
import chess from '../public/chess.jpg'
import boy from "../public/boy.jpg"
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
        flexDirection: 'row',
    }
    , innertwo: {
        justifyContent: "start",
        textAlign: "center",
        backgroundImage: `url(${chess})`,   
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        width: '100%;',
        height:"100%",
        backgroundPosition: "50%",
        fontSize: "20px",
  
      },
      innerthree: {
        backgroundImage: `url(${boy})`,   
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        width: '100%;',
        height:"100%",
        justifyContent: "start",
        textAlign: "center",
        fontSize: "20px",
  
      }, innerone: {
        justifyContent: "start",
        textAlign: "center",
        backgroundImage: `url(${planets})`,   
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "50%",
        height:"100%",
        width: '100%',
        fontSize: "20px",
  
      },
      containerforarticles:{
        width: "100%",
      height: "100%",
      justifyContent: "start",
      marginBottom: '10px', 
      flexDirection: "column",
      }
    
})

export default function Recent() {
    return (
        
      <View style={styles.container}>
        <span id='recent'><strong>Recent Posts</strong></span>
        <View style={styles.containerforarticles}>

        <div id='recent-1' style={styles.box}> 
            <View style={styles.innerone}  >
            <Link to="/users">          
            <span id="text-data">09-02-2023</span><br></br>
            <span id="text"><strong>Te planety przewidzą przyszłość</strong></span>
            </Link>
            </View>   
        </div>

        <div id='recent-2' style={styles.box}> 
            <View style={styles.innertwo} >
            <Link to="/users">          
            <span id="text-data">09-02-2023</span><br></br>
            <span id="text"><strong>Szachy rozwijają umysł</strong></span>
            </Link>
            </View>   
        </div>

        <div id='recent-3' style={styles.box}> 
            <View style={styles.innerthree} >
            <Link to="/users">          
            <span id="text-data">09-02-2023</span><br></br>
            <span id="text"><strong>Niesamowity nastolatek rozwiązał problem</strong></span>
            </Link>
            </View>   
        </div>
        </View>

      </View>
    );
  }