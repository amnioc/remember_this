import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import starterCategories2 from "../../helpers/holders";
import {
  filterNotes,
  filterResults,
} from "../../features/searchNotes/searchFuncs";
// import { useState } from "react";

const CategoryFilter = ({ filter, setFilter, setNotes }) => {
  // const [selected, setSelected] = useState(false);

  return (
    <FlatList
      data={starterCategories2}
      renderItem={({ item }) => (
        <Pressable
          style={styles.categoryFilter}
          onPress={() => {
            setFilter(filterResults(filter, item));
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
