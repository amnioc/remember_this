import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// let bgColor = "pink";
const CategoryButtons = ({ categories, setCategories }) => {
  const starterCategories = ["Work", "Hobbies", "Holiday", "Food", "Link"];
  const [color, setColor] = useState("pink");

  // let bgColor = "pink";

  const updateCategoryandColor = (category) => {
    if (categories.includes(category)) {
      const index = categories.indexOf(category);
      categories.splice(index, 1);
      setCategories([...categories]);
      // setColor("pink");
    } else if (!categories.includes(category)) {
      setCategories([...categories, `${category}`]);
      // setColor("blue");
    }
  };

  return (
    <View style={styles.categoryWrapper}>
      {starterCategories.map((category) => {
        return (
          <Pressable
            key={`${category}`}
            style={[styles.categoryChoice, { backgroundColor: color }]}
            underlayColor={"grey"}
            onPress={() => {
              updateCategoryandColor(`${category}`);
            }}
          >
            <Text>{`${category}`}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryWrapper: {
    borderColor: "blue",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },

  categoryChoice: {
    margin: 5,
    maxWidth: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    color: "black",
    // backgroundColor: `${color}`,
  },
});

export default CategoryButtons;
