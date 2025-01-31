import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import StudentTab from "./components/StudentTab";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StudentTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
