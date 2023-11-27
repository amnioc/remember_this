import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import starterCategories2 from "../../helpers/holders";
import { filterResults } from "./searchFuncs";

const SearchNotes = ({ notes, setNotes }) => {
  const [filter, setFilter] = React.useState({
    category: [],
    date: 0,
    text: "",
  });

  // function filterResults(filter, item) {
  //   // console.log(filter);
  //   filter.category.push(item.category);
  //   console.log(filter);

  //   return setFilter({ ...filter });
  // }

  return (
    <SafeAreaView style={styles.searchMenu}>
      <Text>SEARCH NOTES BY:</Text>
      <FlatList
        data={starterCategories2}
        renderItem={({ item }) => (
          <Pressable
            style={styles.categoryFilter}
            onPress={() => {
              setFilter(filterResults(filter, item));
            }}
          >
            <Text style={styles.filterLabel}>{item.category}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
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
  categoryFilter: {
    backgroundColor: "grey",
    width: "25%",
    padding: 10,
    margin: 10,
  },
  filterLabel: {
    color: "white",
    textAlign: "center",
  },
});
export default SearchNotes;
