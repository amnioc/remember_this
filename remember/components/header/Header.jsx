import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerTitleWrapper}>
      <Text style={styles.headerTitle}>Remember This</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: "purple",
    fontSize: 50,
    height: 55,
    flexDirection: "row",
    borderColor: "pink",
  },

  headerTitleWrapper: {
    flex: 0.5,
    borderColor: "pink",

    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
