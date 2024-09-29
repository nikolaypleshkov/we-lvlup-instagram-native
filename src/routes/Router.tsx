import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../constants/types";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import { AppTheme } from "../constants/styles";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator<AppStackParamList>();

const Router = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Router;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: AppTheme.colors.systemBackground,
  },
});
