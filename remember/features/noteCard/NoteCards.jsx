import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import DeleteNote from "../deleteNote/DeleteNote";

const NoteCards = ({ item, notes, setNotes }) => {
  return (
    <View>
      <Text style={styles.noteText}>The Note: {item.content}</Text>
      <Text style={styles.noteCategories}>
        Categories: {item.category.join(", ") || "-"}
      </Text>
      <Text style={styles.noteDate}>Created On: {item.date.slice(0, 15)}</Text>
      <DeleteNote note={item.id} notes={notes} setNotes={setNotes} />
    </View>
  );
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
    borderColor: "black",
  },
  noteCategories: {},
});
export default NoteCards;
