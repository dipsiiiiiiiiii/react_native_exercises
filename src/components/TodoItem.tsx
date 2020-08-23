import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { Todo } from "../redux/reducers/todos";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onRemove }: Props) {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <Text
          style={{ textDecorationLine: todo.done ? "line-through" : "none" }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemove}>
        <Text>삭제</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
