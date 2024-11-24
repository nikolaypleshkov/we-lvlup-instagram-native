import { StyleSheet } from "react-native";
import { AppTheme } from "../../../../constants/styles";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    marginHorizontal: 8,
    alignItems: "center",
  },
  addIcon: {
    position: "absolute",
    bottom: 20,
    right: 0,
    backgroundColor: AppTheme.colors.primaryButton,
    color: "#ffff",
    borderRadius: 50,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
  username: {
    fontSize: 10
  }
});
