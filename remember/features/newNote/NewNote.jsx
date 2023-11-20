import React from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import CategoryButtons from "../../components/noteCategories/CategoryButtons";
import { doc, setDoc } from "firebase/firestore";
import db from "../../firebaseConfig copy";

const NewNote = () => {
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
    <View>
      <TextInput
        style={styles.input}
        placeholder="I need to remember..."
        multiline={true}
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
      <CategoryButtons setCategories={setCategories} categories={categories} />
      <Text>Categories Chosen: {`${categories.join(", ")}`} </Text>
      <Button
        title="Save Note"
        color={"purple"}
        onPress={() => {
          writeNoteData(`${text}`, `${new Date().getTime()}`, categories);
        }}
        accessibilityLabel="Save your Note using this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "purple",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "pink",
    padding: 10,
  },
});

export default NewNote;
