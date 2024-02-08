import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ViewNotes from "./ViewNotes.jsx";
import { getAllNotes } from "./getNotesFuncs.js";

const ShowNotesButton = ({ notes, setNotes, setShowNotes, showNotes }) => {

  return (
    <View>
      <Pressable
        onPress={() => {
          showNotes ? setShowNotes(false) : setShowNotes(true);
          getAllNotes(setNotes)
        }}
        style={styles.showListButton}
      >
        <Text styles={styles.buttonText}>
          {showNotes ? "Return To Home" : "Click For List"}
        </Text>
      </Pressable>

      {showNotes ? (
        <ViewNotes notes={notes} setNotes={setNotes} />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  showListButton: {
    position: "relative",
    padding: 20,
    margin: 25,
    alignItems: "center",
    backgroundColor: "aquamarine",
  },
  buttonText: {
    color: "white",
  },
});

export default ShowNotesButton;
