import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import db from "./firebaseConfig copy";
import Header from "./components/header/Header";
import NewNote from "./features/newNote/NewNote";
import React from "react";
import { doc, setDoc } from "firebase/firestore";
import NotesList from "./features/notesList/NotesList";

export default function App() {
  const [currentNotes, setCurrentNotes] = React.useState([]);
  const [text, setText] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  async function writeNoteData(name, noteId, categories) {
    const newNote = doc(db, "notes", noteId);
    const data = {
      id: noteId,
      content: name,
      category: categories,
      date: `${new Date()}`,
    };
    await setDoc(newNote, data)
      .then(() => {
        console.log("new note in database");
        setText("");
        setCategories([]);
      })
      .catch((error) => {
        console.log(`there was an error! ${error}`);
      });
  }

  return (
    <View style={styles.homepage}>
      <Header style={styles.header} />
      <NewNote
        text={text}
        setText={setText}
        categories={categories}
        setCategories={setCategories}
      />
      <Button
        title="Save Note"
        color={"purple"}
        onPress={() => {
          writeNoteData(`${text}`, `${new Date().getTime()}`, categories);
        }}
        accessibilityLabel="Save your Note using this purple button"
      />
      <NotesList
        currentNotes={currentNotes}
        setCurrentNotes={setCurrentNotes}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "pink",
  },
  header: {
    height: 55,
    alignItems: "center",
    backgroundColor: "purple",
    flexDirection: "row",
  },
});
