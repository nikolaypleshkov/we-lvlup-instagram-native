import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./UsernameCreation.styles";

type UsernameCreationProps = {
  onSubmit: (username: string) => void;
  collectedUsername: string | null;
};

const UsernameCreation = (props: UsernameCreationProps) => {
  const { onSubmit, collectedUsername } = props;
  const [username, setUsername] = React.useState<string>(collectedUsername || '');

  const submitUsername = () => {
    onSubmit(username);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Create username</Text>
        <Text style={styles.caption}>
          Choose a username for your new account. You can always change it
          later.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          onChangeText={(newValue) => setUsername(newValue)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={submitUsername}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsernameCreation;
