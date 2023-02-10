import {View,StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      height: '100vh' ,
      justifyContent: "center",
    },  
    inputs:{
        color: "black",
        padding: '12px',
        marginBottom: "2rem",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    labels:{
        textAlign: "center"

    }
  });


export default function Users() {
    return (
      <View style={styles.container} >
        <form method='post' action='http://localhost:3500/admindata'encType='multipart/form-data' >
        <label for="title" style={styles.labels}>title</label><br></br>
        <input type={"text"} style={styles.inputs} id="title" name="title"></input><br></br>

        <label for="text" style={styles.labels}>Text</label><br></br>
        <input type={"text"} style={styles.inputs} id="text" name="text"></input><br></br>
        <input type={"file"} name="file"></input>
        <button type='submit'>Dodaj</button>
        </form>
      </View>
    );
  }