import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
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
  }
});

export default SearchNotes;