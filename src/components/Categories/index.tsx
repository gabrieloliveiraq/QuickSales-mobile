import { categories } from "../../mocks/categories";
import { Category, Icon } from "./styles";
import { Text } from "../Text";
import { FlatList } from "react-native";
import { useState } from "react";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handlerSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;

    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <Category onPress={() => handlerSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text size={14} weight={"600"}>
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
