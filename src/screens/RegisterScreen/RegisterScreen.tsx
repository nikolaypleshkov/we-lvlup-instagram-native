import React from "react";
import { Text, View } from "react-native";
import UsernameCreation from "./components/UsernameCreation";
import PasswordCreation from "./components/PasswordCreation/PasswordCreation";
import AdditionalInfo from "./components/AdditionalInfo";
import { AdditionalData } from "../../constants/types";
import AccountPreview from "./components/AccountPreview/AccountPreview";

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
  const [loading, setLoading] = React.useState(false);

  const register = async () => {
    setTimeout(() => {
      console.log('collected data', dataCollection);
      return Promise.resolve({
        dataCollection,
      });
    }, 1000);
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

      {currentStep === 'preview' && (
        <AccountPreview dataCollection={dataCollection} onEdit={function (step: string): void {
          throw new Error("Function not implemented.");
        } } onComplete={register} />
      )}
    </View>
  );
};

export default RegisterScreen;
