import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import UsernameCreation from "./components/UsernameCreation";
import PasswordCreation from "./components/PasswordCreation/PasswordCreation";
import AdditionalInfo from "./components/AdditionalInfo";
import {
  AdditionalData,
  RegisterScreenNavigationProp,
} from "../../constants/types";
import AccountPreview from "./components/AccountPreview/AccountPreview";
import axios from "axios";
import { styles } from "./components/AccountPreview/AccountPreview.styles";
import { useAppDispatch } from "../../app/hooks";
import { showToast } from "../../features/toast/toastSlice";

type RegisterScreenProps = {
  navigation: RegisterScreenNavigationProp;
};

interface Step<T> {
  data: T;
  completed: boolean;
}

export type RegistrationInformation = {
  username: Step<string | null>;
  password: Step<string | null>;
  additionalData: Step<AdditionalData>;
  profileImage?: Step<string | null>;
};

const defaultState = {
  username: {
    data: null,
    completed: false,
  },
  password: {
    data: null,
    completed: false,
  },
  additionalData: {
    data: {
      emailOrPhone: null,
      fullname: null,
    },
    completed: false,
  },
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [dataCollection, setDataCollection] =
    React.useState<RegistrationInformation>(defaultState);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleNavigation = () => {
    navigation.navigate("Login");
    setDataCollection(defaultState);
  };

  const register = async () => {
    setLoading(true);
    try {
      const payload = {
        username: dataCollection.username.data,
        email: dataCollection.additionalData.data.emailOrPhone,
        fullname: dataCollection.additionalData.data.fullname,
        profileImage: dataCollection.profileImage?.data,
        password: dataCollection.password.data,
      };

      const response = await axios
        .post("http://localhost:8080/api/v1/users", payload)
        .then((res) => res.data);

      if (response.data) {
        dispatch(
          showToast({
            type: "success",
            message: "Registration successful!",
          })
        );
        navigation.navigate("Login");
        setDataCollection(defaultState);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      // TODO: Show error message
      dispatch(
        showToast({
          type: "error",
          message: "Something went wrong, please try again...",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  const getCurrentStep = () => {
    if (!dataCollection.username.completed) {
      return "username";
    }
    if (!dataCollection.password.completed) {
      return "password";
    }
    if (!dataCollection.additionalData.completed) {
      return "additionalInformation";
    }

    return "preview";
  };

  const currentStep = getCurrentStep();

  return (
    <View>
      {currentStep === "username" && (
        <UsernameCreation
          collectedUsername={dataCollection.username.data}
          onSubmit={(username) =>
            setDataCollection((prev) => ({
              ...prev,
              username: {
                data: username,
                completed: true,
              },
            }))
          }
        />
      )}

      {currentStep === "password" && (
        <PasswordCreation
          onSubmit={(password) =>
            setDataCollection((prev) => ({
              ...prev,
              password: {
                data: password,
                completed: true,
              },
            }))
          }
          onDiscard={() =>
            setDataCollection((prev) => ({
              ...prev,
              username: {
                ...prev.username,
                completed: false,
              },
            }))
          }
        />
      )}
      {currentStep === "additionalInformation" && (
        <AdditionalInfo
          username={dataCollection.username.data!}
          onSubmit={(additionalInfo) =>
            setDataCollection((prev) => ({
              ...prev,
              additionalData: {
                data: additionalInfo,
                completed: true,
              },
            }))
          }
          onDiscard={() =>
            setDataCollection((prev) => ({
              ...prev,
              additionalData: {
                ...prev.additionalData,
                completed: false,
              },
            }))
          }
        />
      )}

      {currentStep === "preview" && (
        <AccountPreview
          dataCollection={dataCollection}
          onImageChange={(newImageRef) =>
            setDataCollection((prev) => ({
              ...prev,
              profileImage: {
                completed: false,
                data: newImageRef,
              },
            }))
          }
          onEdit={function (step: string): void {
            throw new Error("Function not implemented.");
          }}
          onComplete={register}
          loading={loading}
        />
      )}

      {currentStep !== "preview" && currentStep !== "additionalInformation" && (
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegisterScreen;
