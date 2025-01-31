import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import StudentList from './StudentList';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { students } from './StudentsDb';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';

export default function StudentTab() {
  const Stack = createNativeStackNavigator();
  return (
        <Stack.Navigator initialRouteName='Studentlist' screenOptions={
          {
            headerStyle: { backgroundColor: '#4b0150' },
            headerTintColor:'#ffff', 
            headerTitleAlign:'center'
        }}>
          <Stack.Screen name='Studentlist' component={StudentList} options={{ title: "List of Students" }} />
          <Stack.Screen name='Profile' component={Profile} options={{ title: "Student's Profile" }} />
          <Stack.Screen name='ADD' component={AddStudent} options={{ title: "Add New Student" }} />
          <Stack.Screen name='Update' component={UpdateStudent} options={{ title: "Update the Student" }} />
        </Stack.Navigator>
  );
}


