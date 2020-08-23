import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";

import AddTodo from "./src/screens/AddTodo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import ThingsTodo from "./src/screens/ThingsTodo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStore } from "redux";
import rootReducers from "./src/redux/reducers";

const Tabs = createBottomTabNavigator();

const store = createStore(rootReducers);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="ThingsTodo" component={ThingsTodo} />
          <Tabs.Screen name="AddTodo" component={AddTodo} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
