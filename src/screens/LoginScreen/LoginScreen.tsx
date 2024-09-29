import React from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./LoginScreen.styles";
import Divider from "../../components/Divider";
import LoginForm from "./components/LoginForm";
import { LoginScreenNavigationProp } from "../../constants/types";

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  const handleNavigation = () => {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027",
          }}
          width={200}
          height={60}
        />
      </View>
      <LoginForm />
      <View style={styles.dividerContainer}>
        <Divider />
        <Text style={styles.orText}>OR</Text>
        <Divider />
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s",
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Log in with Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Divider dividerStyle={styles.screenDivider} />
        <View style={styles.signUpTextContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
