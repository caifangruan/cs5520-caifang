import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native'
import React, {useState} from 'react'

export default function Input({inputHandler, modalVisible, dismissModal}) {
  const [text, setText] = useState("");
  
  // callback handler
  function changeTextHandler(changedText){
    console.log("user is typing", changedText);
    setText(changedText);
  }

  function confirmHandler(){
    inputHandler(text);
  }
  function cancelHandler(){
    //hide the modal
    dismissModal();
  }



  return (
    <Modal visible={modalVisible}>
      <View style = {styles.container}>
        <Image
          source = {{
            url: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          style = {styles.image}
          
        />
        <Image
          source = {
            require("../assets/goalImage.png"
          )}
          style = {styles.image}
        />
        <TextInput
           placeholder="Type something"
           style={styles.input}
           value={text}
          onChangeText={changeTextHandler}
        />
        <View style = {styles.buttonsContainer}>
          <View style = {styles.buttonView}>
            <Button title="Confirm" onPress = {confirmHandler}/>
          </View>
          <View style = {styles.buttonView}>
          <Button title="Cancel" onPress = {cancelHandler}/>
          </View>
        </View>
      </View>
  </Modal>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width:"50%",
  },
  image:{
    width:100,
    height:100,

  },
  buttonsContainer:{
    flexDirection: "row",
  },
  buttonView:{
    width: "30%",
    margin: 5,
  }

});