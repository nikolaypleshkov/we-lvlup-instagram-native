import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
}

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Register'
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Login'
>;

export interface AdditionalData {
    emailOrPhone: string | null;
    fullname: string | null;
  }