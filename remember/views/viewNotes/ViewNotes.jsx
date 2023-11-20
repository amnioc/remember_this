import { ScrollView, StyleSheet, View } from "react-native";
import NoteCards from "../../features/noteCard/NoteCards";

const ViewNotes = ({ notes }) => {
  return (
    <ScrollView style={styles.allNotesList}>
      <NoteCards notes={notes} />
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
