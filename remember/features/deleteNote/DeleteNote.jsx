import { deleteDoc, doc } from "firebase/firestore";
import { Text, Pressable, StyleSheet } from "react-native";
import db from "../../firebaseConfig copy";

const DeleteNote = ({ note }) => {
  async function deleteNote(note) {
    const thisNote = doc(db, "notes", note);

    await deleteDoc(thisNote)
      .then(() => {
        console.log("note deleted");
      })
      .catch((error) => {
        console.log(`there was an error: ${error}`);
      });
  }

  return (
    <Pressable
      style={styles.binButton}
      onPress={() => {
        deleteNote(note);
      }}
    >
      <Text accessibilityLabel="delete note" style={{ fontSize: 25 }}>
        🗑️
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  binButton: {
    color: "yellow",
    alignItems: "flex-end",
    padding: 5,
  },
});
export default DeleteNote;
