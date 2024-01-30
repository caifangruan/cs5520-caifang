import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import { useState} from "react";
import Header from './components/Header';
import Input from './components/Input';



export default function App() {
  const appName = "My awesome app";
  const [text, setText] = useState("");
  const [isModalVisible,setIsModalVisible] = useState(false);
  function receiveInput(data){
    console.log("receiving input", data)
    setText(data);
    setIsModalVisible(false);
    //use this to update the text showing in the
    //Text component
  }

  function dismissModal(){
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} /> 
        <Button title="Add a goal" onPress ={()=> setIsModalVisible(true)}/>
        <Input 
          inputHandler = {receiveInput} 
          dismissModal = {dismissModal} 
          modalVisible ={isModalVisible}
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView:{
    flex: 4,
    backgroundColor: "lightpink",
    alignItems:"center",
  },
  text:{
    textAlign: "center",
    fontSize:20,
    backgroundColor:"purple",
    color: "white",
    padding: 5,
    marginTop:5,
  },
  
});
