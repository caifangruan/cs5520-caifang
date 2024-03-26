import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllDocs, writeToDB } from '../firebase_files/firestoreHelper';

export default function GoalUsers({ id }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersFromDB = await getAllDocs(`goals/${id}/users`);
        console.log(usersFromDB);
        // we should check if usersFromDB is undefined
        if (usersFromDB.length) {
          setUsers(usersFromDB);
          return;
        }
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("data wasn't there!"); // automatically exit
        }
        //extract data if successful
        const data = await response.json();
        setUsers(data);
        //write a loop , forEach, on data and call writeToDB
        // with (one user, "goals",id,"users" )
        data.forEach((element) => {
          // write each user to a document in users subcollection
          writeToDB(element, "goals", id, "users");
          //or
          //  writeToDB(element, `goals/${id}/users`);
          // writeToDB(element, "goals/"+id+"/users")
        });
      } catch (err) {
        console.log("fetch users ", err);
        //show a message to user
      }
    }
    fetchUsers();
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});