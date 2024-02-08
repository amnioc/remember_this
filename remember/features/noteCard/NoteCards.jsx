import { StyleSheet, Text, View } from "react-native";
import DeleteNote from "../deleteNote/DeleteNote";

const NoteCards = ({ item, notes, setNotes }) => {
  return (
    <View style={styles.noteHolder}>
      <Text style={styles.noteText}>{item.content}</Text>
      <Text style={styles.noteCategories}>
        Categories: {item.category.join(", ") || "-"}
      </Text>
      <Text style={styles.noteDate}>Created On: {item.date.slice(0, 15)}</Text>
      <DeleteNote note={item.id} notes={notes} setNotes={setNotes} />
    </View>
  );
};

const styles = StyleSheet.create({
  noteHolder: {
    borderColor: "grey",
    borderWidth: 5,
    padding: 5,
  },
  noteText: {
    color: "purple",
  },
  noteCategories: {},
  noteDate: {},
});
export default NoteCards;
