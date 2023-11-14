import { Button, StatusBar, StyleSheet, View } from "react-native";
import ShowNotesButton from "../../features/notesList/ShowNotesButton";
import NewNote from "../../features/newNote/NewNote";
import Header from "../../components/header/Header";
import { doc, setDoc } from "firebase/firestore";
import db from "../../firebaseConfig copy";

const HomePage = ({
  text,
  setText,
  currentNotes,
  setCurrentNotes,
  categories,
  setCategories,
  showNotes,
  setShowNotes,
}) => {
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
      <ShowNotesButton
        setShowNotes={setShowNotes}
        showNotes={showNotes}
        currentNotes={currentNotes}
        setCurrentNotes={setCurrentNotes}
      />

      <StatusBar style="auto" />
    </View>
  );
};
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

export default HomePage;
