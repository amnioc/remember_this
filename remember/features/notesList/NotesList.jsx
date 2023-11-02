import { Text, TouchableOpacity, View } from "react-native";
import db from "../../firebaseConfig copy.js";
import { collection, getDocs } from "firebase/firestore";
import FullNotesList from "./FullNotesList.jsx";
import React from "react";

const NotesList = ({ currentNotes, setCurrentNotes }) => {
  const [pressed, setPressed] = React.useState(false);
  async function getAllNotes() {
    await getDocs(collection(db, "notes")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCurrentNotes(newData);
      pressed ? setPressed(false) : setPressed(true);
      //   console.log(currentNotes, newData);
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={getAllNotes}>
        <Text>Click For List</Text>
      </TouchableOpacity>

      {pressed ? <FullNotesList currentNotes={currentNotes} /> : <Text></Text>}
    </View>
  );
};

export default NotesList;
