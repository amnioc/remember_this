import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import starterCategories2 from "../../helpers/holders";
import {
  filterNotes,
  filterResults,
} from "../../features/searchNotes/searchFuncs";

const CategoryFilter = ({ filter, setFilter, setNotes }) => {
  return (
    <FlatList
      data={starterCategories2}
      renderItem={({ item }) => (
        <Pressable
          style={styles.categoryFilter}
          onPress={() => {
            setFilter(filterResults(filter, item));
            // console.log(filter);
            setNotes(filterNotes(filter, setNotes));
          }}
        >
          <Text style={styles.filterLabel}>{item.category}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
const styles = StyleSheet.create({
  categoryFilter: {
    backgroundColor: "grey",
    width: "25%",
    padding: 5,
    margin: 10,
  },
  filterLabel: {
    color: "white",
    textAlign: "center",
  },
});

export default CategoryFilter;
