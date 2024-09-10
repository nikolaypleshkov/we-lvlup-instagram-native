import React from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../LoginScreen.styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./login.schema";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onLoginSubmit = (formData: any): void => {};

  return (
    <>
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
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="email"
          />
          {errors.email && <Text>{errors.email.message}</Text>}
        </View>
        <View style={styles.formItem}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
            name="password"
          />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit(onLoginSubmit)}
        >
          <Text style={styles.submitButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginForm;
