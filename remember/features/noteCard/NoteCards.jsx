import { ScrollView, StyleSheet, Text, View } from "react-native";

const NoteCards = ({ currentNotes }) => {
  return currentNotes.map((note) => {
    return (
      <View key={note.id} style={styles.noteCardContainer}>
        <Text style={styles.mainContent}>
          The Note: {note.content} Categories: {note.category}
        </Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  noteCardContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    position: "relative",
    backgroundColor: "light grey",
    borderColor: "blue",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  mainContent: {
    // borderColor: "black",
  },
});
export default NoteCards;
