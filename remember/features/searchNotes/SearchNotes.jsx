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
import AccordionItem from "../../components/accordian/accordian";
import CategoryFilter from "../../components/filters/categoryFilter";

const SearchNotes = ({ notes, setNotes }) => {
  const [filter, setFilter] = React.useState({
    category: [],
    date: 0,
    text: "",
  });

  return (
    <SafeAreaView style={styles.searchMenu}>
      <AccordionItem
        title="search notes"
        body={
          <CategoryFilter
            filter={filter}
            setFilter={setFilter}
            setNotes={setNotes}
          />
        }
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
  // categoryFilter: {
  //   backgroundColor: "grey",
  //   width: "25%",
  //   padding: 10,
  //   margin: 10,
  // },
  // filterLabel: {
  //   color: "white",
  //   textAlign: "center",
  // },
});
export default SearchNotes;
// module.exports.filterNotes = filterNotes;
