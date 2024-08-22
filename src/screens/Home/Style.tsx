import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
      
    },
    logoContainer:{
      flexDirection: 'column',
      borderColor: 'white',
      borderWidth: 2,
      justifyContent: 'center',
      alignSelf:'center',
      marginBottom: 60,
      padding: 20,
      backgroundColor: '#4D4D4D',


  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  texto: {
    color:"white",
  }

});
  

  export default styles