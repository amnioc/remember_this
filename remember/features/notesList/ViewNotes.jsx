import { View, StyleSheet, FlatList } from "react-native";
import NoteCards from "../noteCard/NoteCards";

const ViewNotes = ({ notes, setNotes }) => {
  return (
    <View style={styles.noteCardContainer}>
      <FlatList
        data={notes}
        renderItem={({ item }) => {
          return <NoteCards item={item} notes={notes} setNotes={setNotes} />;
        }}
        keyExtractor={(item) => item.id}
        style={styles.notesList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  noteCardContainer: {
    flex: 1,
    alignContent: "center",
    borderWidth: 10,
    borderColor: "blue",
  },
  notesList: {
    margin: 5,
    borderWidth: 5,
    borderColor: "pink",
  },
});

export default ViewNotes;
