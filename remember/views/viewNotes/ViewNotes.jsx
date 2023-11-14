import { ScrollView, StyleSheet, View } from "react-native";
import NoteCards from "../../features/noteCard/NoteCards";

const ViewNotes = ({ currentNotes }) => {
  return (
    <ScrollView style={styles.allNotesList}>
      <NoteCards currentNotes={currentNotes} />
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
