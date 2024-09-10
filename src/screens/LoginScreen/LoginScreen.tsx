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

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png",
          }}
          width={220}
          height={120}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formItem}>
          <TextInput
            style={styles.input}
            placeholder="Phone number, username or email address"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formItem}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

export default LoginScreen;
