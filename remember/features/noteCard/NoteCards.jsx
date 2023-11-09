import { StyleSheet, Text, View } from "react-native";

const NoteCards = ({ currentNotes }) => {
  return currentNotes.map((note) => {
    return (
      <View key={note.id} style={styles.noteCardContainer}>
        <Text style={styles.noteText}>The Note: {note.content}</Text>
        <Text style={styles.noteCategories}>
          Categories: {note.category.join(", ") || "-"}
        </Text>
        <Text style={styles.noteDate}>
          Created On: {note.date.slice(0, 15)}
        </Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  noteCardContainer: {
    flex: 0.2,
    alignContent: "center",
    backgroundColor: "light grey",
    borderWidth: 10,
    borderColor: "blue",
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  noteText: {
    // borderColor: "black",
  },
  noteCategories: {},
});
export default NoteCards;
