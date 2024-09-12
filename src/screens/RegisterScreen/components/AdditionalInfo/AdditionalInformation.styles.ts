import { StyleSheet } from "react-native";
import { AppTheme } from "../../../../constants/styles";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  caption: {
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 10,
  },
  form: {
    marginVertical: 30,
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
    paddingVertical: 5,
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
  cancelButtonText: {
    textAlign: 'center',
    color: AppTheme.colors.main,
    marginTop: 10
  }
});
