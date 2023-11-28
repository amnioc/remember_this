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
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../../firebaseConfig copy";

const SearchNotes = ({ notes, setNotes }) => {
  const [filter, setFilter] = React.useState({
    category: [],
    date: 0,
    text: "",
  });

  async function filterNotes(filter) {
    console.log("here in filterNotes");
    // const querySnapshot = await getDocs(
    //   query(
    //     collection(db, "notes"),
    //     where("category", "array-contains", filter.category[0]),
    //     orderBy("id", "desc")
    //   )
    // );
    // const filteredNotes = querySnapshot.docs.map((doc) => {
    //   return { id: doc.id, ...doc.data() };
    // });
    // return filteredNotes;
  }

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
              setNotes(filterNotes(notes, filter));
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
