import { StyleSheet } from "react-native";
import { AppTheme } from "../../../../constants/styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    width: "100%",
  },
  icon: { fontSize: 45, marginLeft: 10 },
  header: {
    fontWeight: "600",
    fontSize: 25,
  },
  caption: {
    color: "#9a9a9a",
    textAlign: "center",
    paddingHorizontal: 40,
    paddingTop: 10,
  },
  input: {
    height: 35,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#F8F8F8",
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    paddingHorizontal: 30,
  },
  submitButton: {
    backgroundColor: AppTheme.colors.primaryButton,
    borderRadius: 5,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  submitButtonText: {
    color: "#fff",
  },
});
