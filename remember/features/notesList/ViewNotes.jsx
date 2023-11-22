import { ScrollView, StyleSheet, View } from "react-native";
import NoteCards from "../noteCard/NoteCards";

const ViewNotes = ({ notes, setNotes }) => {
  return (
    <ScrollView style={styles.allNotesList}>
      <NoteCards notes={notes} setNotes={setNotes} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  allNotesList: {
    position: "relative",
    margin: 10,
    padding: 10,
  },
});

export default ViewNotes;
