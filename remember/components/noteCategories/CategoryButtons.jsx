import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoryButtons = ({ categories, setCategories }) => {
  const starterCategories = ["Work", "Hobbies", "Holiday", "Food", "Music"];
  let bgColor = "pink";

  const updateCategoryandColor = (category) => {
    if (categories.includes(category)) {
      const index = categories.indexOf(category);
      categories.splice(index, 1);
      setCategories(categories);
      bgColor = "pink";
    } else if (!categories.includes(category)) {
      setCategories([...categories, `${category}`]);
      bgColor = "blue";
    }
  };

  return (
    <View style={styles.categoryWrapper}>
      {starterCategories.map((category) => {
        return (
          <TouchableOpacity
            key={`${category}`}
            style={[styles.categoryChoice, { backgroundColor: `${bgColor}` }]}
            onPress={() => {
              updateCategoryandColor(`${category}`);
            }}
          >
            <Text>{`${category}`}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryWrapper: {
    borderColor: "blue",
  },

  categoryChoice: {
    margin: 5,
    maxWidth: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    color: "black",
    backgroundColor: "pink",
  },
});

export default CategoryButtons;
