import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import StudentList from "./StudentList";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { students } from "./StudentsDb";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import Bottam from "./Bottam";

export default function StudentTab() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Studentlist"
      screenOptions={{
        headerShown: false,
      }}
    ></Stack.Navigator>
  );
}
