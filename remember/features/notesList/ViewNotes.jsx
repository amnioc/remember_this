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
      />
    </View>
  );
};
const styles = StyleSheet.create({
  // allNotesList: {
  //   position: "relative",
  //   margin: 10,
  //   padding: 10,
  // },
  noteCardContainer: {
    flex: 1,
    alignContent: "center",
    // backgroundColor: "light grey",
    borderWidth: 10,
    borderColor: "blue",
    // position: "relative",
    // flexDirection: "column",
    // justifyContent: "space-evenly",
  },
  noteText: {
    color: "purple",
    // borderColor: "black",
  },
  noteCategories: {},
});

export default ViewNotes;
