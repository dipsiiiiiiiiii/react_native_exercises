import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!todoText) return;
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="할 일을 입력하세요."
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
      />
      <TouchableOpacity onPress={handleAddTodo}>
        <Text>추가</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 200,
    height: 30,
    borderWidth: 0.5,
    borderColor: "gray",
    marginRight: 16,
    borderRadius: 8,
    paddingLeft: 8,
  },
});
