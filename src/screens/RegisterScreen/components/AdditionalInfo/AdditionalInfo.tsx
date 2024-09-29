import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./AdditionalInformation.styles";
import { AdditionalData } from "../../../../constants/types";

type AdditionalInfoProps = {
  username: string;
  onSubmit: (values: AdditionalData) => void;
  onDiscard: () => void;
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = (props) => {
  const { username, onSubmit, onDiscard } = props;
  const [emailOrPhone, setEmailOrPhone] = React.useState<string>("");
  const [fullname, setFullname] = React.useState<string>("");

  const submitAdditionalInfo = () => {
    onSubmit({
      emailOrPhone,
      fullname,
    });
  };

  const onProcessDiscard = () => {
    onDiscard();
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome to Instagram, {username}</Text>
      </View>
      <Text style={styles.caption}>
        Continue with the sign up to see photos and videos from your friends.
      </Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone number or email"
            autoCapitalize="none"
            autoCorrect={false}
            value={emailOrPhone}
            onChangeText={(value) => setEmailOrPhone(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            autoCorrect={false}
            value={fullname}
            onChangeText={(value) => setFullname(value)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={submitAdditionalInfo}
        >
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onProcessDiscard}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdditionalInfo;
