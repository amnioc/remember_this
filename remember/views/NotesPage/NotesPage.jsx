import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ShowNotesButton from "../../features/notesList/ShowNotesButton";
import Header from "../../components/header/Header";
import SearchNotes from "../../features/searchNotes/SearchNotes";

const NotesPage = ({ showNotes, setShowNotes, notes, setNotes }) => {
  return (
    <View style={styles.notesPage}>
      <Header />
      <SearchNotes notes={notes} setNotes={setNotes} />
      <ShowNotesButton
        setShowNotes={setShowNotes}
        showNotes={showNotes}
        notes={notes}
        setNotes={setNotes}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  notesPage: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default NotesPage;
