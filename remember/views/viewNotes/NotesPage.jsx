import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import ShowNotesButton from "../../features/notesList/ShowNotesButton";
import Header from "../../components/header/Header";

const NotesPage = ({ showNotes, setShowNotes, notes, setNotes }) => {
  return (
    <ScrollView style={styles.notesPage}>
      <Header style={styles.header} />

      <ShowNotesButton
        setShowNotes={setShowNotes}
        showNotes={showNotes}
        notes={notes}
        setNotes={setNotes}
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notesPage: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },
  header: {
    height: 55,
    alignItems: "center",
    backgroundColor: "purple",
  },
});
export default NotesPage;
