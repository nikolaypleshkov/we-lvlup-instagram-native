import React from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../LoginScreen.styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./login.schema";
import Toast from "../../../components/Toast";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { showToast } from "../../../features/toast/toastSlice";
import { login } from "../../../features/auth/authSlice";
import { userResponseMock } from "../../../utils/mock";
import { Envelope } from "../../../models/envelope";
import { User } from "../../../models/user";

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

  const dispatch = useAppDispatch();
  const state = useAppSelector((selector) => selector.auth);

  const triggerToast = (
    type: "success" | "error" | "warning" | "info",
    message: string
  ) => {
    dispatch(showToast({ type: type, message: message }));
  };

  const loginService = (): Promise<Envelope<User>> => {
    return Promise.resolve(userResponseMock);
  };

  const onLoginSubmit = (formData: any): void => {
    loginService().then((response) => {
      dispatch(
        login({
          user: response.data,
        })
      );
    });
  };

  return (
    <>
      <View style={styles.formContainer}>
        <View style={styles.formItem}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Phone number, username or email address"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
            name="email"
          />
        </View>
        <View style={styles.formItem}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Password"
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
          onPress={onLoginSubmit}
          // disabled={Boolean(errors.email?.message || errors.password?.message)}
        >
          <Text style={styles.submitButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginForm;
