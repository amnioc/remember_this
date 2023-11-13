import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import CategoryButtons from "../../components/noteCategories/CategoryButtons";

const NewNote = ({ text, setText, categories, setCategories }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="I need to remember..."
        multiline={true}
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
      <CategoryButtons setCategories={setCategories} categories={categories} />
      <Text>Categories Chosen: {`${categories.join(", ")}`} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "purple",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "pink",
    padding: 10,
  },
});

export default NewNote;
