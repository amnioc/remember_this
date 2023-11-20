import { StatusBar, StyleSheet, View } from "react-native";
import ShowNotesButton from "../../features/notesList/ShowNotesButton";
import NewNote from "../../features/newNote/NewNote";
import Header from "../../components/header/Header";

const HomePage = ({ notes, setNotes, showNotes, setShowNotes }) => {
  return (
    <View style={styles.homepage}>
      <Header />
      <NewNote />
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
  homepage: {
    flex: 1,
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "pink",
  },
});

export default HomePage;
