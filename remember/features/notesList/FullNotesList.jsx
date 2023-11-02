import { Text, View } from "react-native";

const FullNotesList = ({ currentNotes }) => {
  {
    return currentNotes.map((note) => {
      return (
        <View key={note.id}>
          <Text>The Note: {note.content}</Text>
          <Text>Categories: {note.category}</Text>
        </View>
      );
    });
  }
  <View></View>;
};
export default FullNotesList;
