import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import StudentList from "./StudentList"; // Ensure these screens exist
import Profile from "./Profile";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";

const Tab = createBottomTabNavigator();

const Bottom = ({ route }) => {
  const Students = route.params; // Ensure this is passed when navigating

  return (
    <Tab.Navigator
      options={{ headerShown: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "StudentList") {
            iconName = "list";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Add") {
            iconName = "plus";
          } else if (route.name === "Update") {
            iconName = "edit";
          }
          return (
            <FontAwesome5
              name={iconName}
              size={24}
              color={focused ? "blue" : "gray"}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="StudentList"
        component={StudentList}
        initialParams={Students}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={Students}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add"
        component={AddStudent}
        initialParams={Students}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Update"
        component={UpdateStudent}
        initialParams={Students}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
