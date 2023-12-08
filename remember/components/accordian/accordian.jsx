import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import SearchNotes from "../../features/searchNotes/SearchNotes";

function AccordionItem({ title, body }) {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{title}</Text>
        <Icon
          name={expanded ? "chevron-up" : "chevron-down"}
          size={20}
          color="purple"
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}
const styles = StyleSheet.create({});
export default AccordionItem;
