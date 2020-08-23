import { StyleSheet, Text, View } from "react-native";
import { removeTodo, toggleTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { RootState } from "../redux/reducers";
import TodoList from "../components/TodoList";

export default function ThingsTodo() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>할 일 목록</Text>
      <View style={styles.listContainer}>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
  listContainer: {
    height: 300,
  },
});
