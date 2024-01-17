import { StyleSheet, TextInput, View } from 'react-native'
import React, {useState} from 'react'

export default function Input() {
  const [text, setText] = useState("");
  // callback handler
  function changeTextHandler(changedText){
    console.log("user is typing", changedText);
    setText(changedText);
  }
  return (
    <View>
      <TextInput
        placeholder="Type something"
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width:"50%",
    },
});