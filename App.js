import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentTab from "./components/StudentTab";
import Bottam from "./components/Bottam";
import { students } from "./components/StudentsDb";
import StudentList from "./components/StudentList";
import Profile from "./components/Profile";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom"
            component={Bottam}
            initialParams={students}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Studentlist"
            component={StudentList}
            options={{ headerShown: false }}
            initialParams={students}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
            initialParams={students}
          />
          <Stack.Screen
            name="ADD"
            component={AddStudent}
            options={{ headerShown: false }}
            initialParams={students}
          />
          <Stack.Screen
            name="Update"
            component={UpdateStudent}
            options={{ headerShown: false }}
            initialParams={students}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
