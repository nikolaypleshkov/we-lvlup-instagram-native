import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProfileHeader from "./components/ProfileHeader";
import ProfileDetails from "./components/ProfileDetails";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <ProfileDetails />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
