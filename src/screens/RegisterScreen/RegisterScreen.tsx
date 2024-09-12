import React from "react";
import { Text, View } from "react-native";
import UsernameCreation from "./components/UsernameCreation";
import PasswordCreation from "./components/PasswordCreation/PasswordCreation";
import AdditionalInfo from "./components/AdditionalInfo";
import { AdditionalData } from "../../constants/types";

interface Step<T> {
  data: T;
  completed: boolean;
}

export type RegistrationInformation = {
  username: Step<string | null>;
  password: Step<string | null>;
  additionalData: Step<AdditionalData>;
};

const RegisterScreen = () => {
  const [dataCollection, setDataCollection] =
    React.useState<RegistrationInformation>({
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
    });

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
    return "completed";
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

      {currentStep === "completed" && <Text>Complete ;))</Text>}
    </View>
  );
};

export default RegisterScreen;
