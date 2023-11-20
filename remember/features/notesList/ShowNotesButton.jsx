import { Pressable, StyleSheet, Text, View } from "react-native";
import db from "../../firebaseConfig copy.js";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React from "react";
import ViewNotes from "./ViewNotes.jsx";

const ShowNotesButton = ({ notes, setNotes, setShowNotes, showNotes }) => {
  async function getAllNotes() {
    const querySnapshot = await getDocs(
      query(collection(db, "notes"), orderBy("id", "desc"))
    );

    const allNotes = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setNotes(allNotes);

    showNotes ? setShowNotes(false) : setShowNotes(true);
  }

  return (
    <View>
      <Pressable onPress={getAllNotes} style={styles.showListButton}>
        <Text styles={styles.showListTitle}>
          {showNotes ? "Return To Home" : "Click For List"}
        </Text>
      </Pressable>

      {showNotes ? <ViewNotes notes={notes} /> : <Text></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  showListButton: {
    position: "relative",
    padding: 20,
    margin: 20,
    color: "red",
  },
});

export default ShowNotesButton;
