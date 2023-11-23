import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const SearchNotes = ({ notes, setNotes }) => {
  return (
    <SafeAreaView style={styles.searchMenu}>
      <Text>SEARCH NOTES BY:</Text>
      <Pressable>Category</Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchMenu: {
    borderColor: "green",
    borderWidth: 5,
    marginTop: 50,
    padding: 20,
    width: "100%",
  },
});
export default SearchNotes;
