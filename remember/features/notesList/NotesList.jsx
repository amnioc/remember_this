import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import db from "../../firebaseConfig copy.js";
import {
  collection,
  documentId,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React from "react";
import NoteCards from "../noteCard/NoteCards.jsx";

const NotesList = ({ currentNotes, setCurrentNotes }) => {
  const [pressed, setPressed] = React.useState(false);
  async function getAllNotes() {
    const querySnapshot = await getDocs(
      query(collection(db, "notes"), orderBy("id", "desc"))
    );

    const newData = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setCurrentNotes(newData);

    pressed ? setPressed(false) : setPressed(true);
  }

  return (
    <View>
      <Pressable onPress={getAllNotes} style={styles.showListButton}>
        <Text styles={styles.showListTitle}>Click For List</Text>
      </Pressable>

      {pressed ? (
        <ScrollView style={styles.allNotesList}>
          <NoteCards currentNotes={currentNotes} />
        </ScrollView>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  showListButton: {
    position: "relative",
    padding: 10,
    color: "red",
  },
  showListTitle: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  allNotesList: {
    position: "relative",
    padding: 10,
  },
});

export default NotesList;
