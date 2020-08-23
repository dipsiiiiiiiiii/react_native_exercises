import { FlatList, StyleSheet } from "react-native";

import React from "react";
import { Todo } from "../redux/reducers/todos";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onRemove }: Props) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }: { item: Todo }) => (
        <TodoItem todo={item} onToggle={onToggle} onRemove={onRemove} />
      )}
    />
  );
}
