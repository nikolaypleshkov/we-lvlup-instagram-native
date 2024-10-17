import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../constants/types";
import { SafeAreaView, StyleSheet, View } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import { AppTheme } from "../constants/styles";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import { useAppSelector } from "../app/hooks";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BottomNavigation from "../components/BottomNavigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

const Router = () => {
  const authState = useAppSelector((selector) => selector.auth);
  return (
    <View style={styles.safeAreaContainer}>
      {authState.isAuthenticated ? (
        <BottomNavigation />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </View>
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
