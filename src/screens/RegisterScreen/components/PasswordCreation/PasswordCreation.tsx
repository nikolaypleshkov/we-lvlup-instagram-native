import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../UsernameCreation/UsernameCreation.styles";
import Icon from "react-native-vector-icons/Entypo";

type PasswordCreationProps = {
  onSubmit: (password: string) => void;
  onDiscard: () => void;
};

const PasswordCreation = (props: PasswordCreationProps) => {
  const { onSubmit, onDiscard } = props;
  const [password, setPassword] = React.useState<string>("");

  const submitPassword = () => {
    onSubmit(password);
  };

  const onProcessDiscard = () => {
    onDiscard();
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onProcessDiscard}>
            <Icon name="chevron-small-left" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Create a password</Text>
        </View>
        <Text style={styles.caption}>
          We can remember the password, so you won't need to enter it on your
          iCloud devices.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={submitPassword}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordCreation;
