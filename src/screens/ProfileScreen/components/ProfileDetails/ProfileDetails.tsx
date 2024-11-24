import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../../../app/hooks";

const ProfileDetails = () => {
  const userSelector = useAppSelector((selector) => selector.auth).user;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: userSelector?.profileImage }} style={styles.profileImage} />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{userSelector?.posts.length}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{userSelector?.followers.length}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{userSelector?.following.length}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.fullName}>{userSelector?.fullname}</Text>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50, // To make the image circular
    marginRight: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#777",
  },
  fullName: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
