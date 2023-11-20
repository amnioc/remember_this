import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import db from "../../firebaseConfig copy.js";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React from "react";
import ViewNotes from "../../views/viewNotes/ViewNotes.jsx";

const ShowNotesButton = ({ notes, setNotes, setShowNotes, showNotes }) => {
  // const [showNotes, setShowNotes] = React.useState(false);
  async function getAllNotes() {
    const querySnapshot = await getDocs(
      query(collection(db, "notes"), orderBy("id", "desc"))
    );

    const newData = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setNotes(newData);

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
    // flex: 1,
    padding: 20,
    margin: 20,
    color: "red",
  },
});

export default ShowNotesButton;
