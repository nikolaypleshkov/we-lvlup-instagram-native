import { StyleSheet } from "react-native";
import { AppTheme } from "../../constants/styles";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: AppTheme.colors.systemBackground
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
  },
  formItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginBottom: 5,
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
  formContainer: {
    paddingHorizontal: 30,
  },
  forgotPasswordText: {
    width: "100%",
    textAlign: "right",
    paddingHorizontal: 30,
    color: AppTheme.colors.main,
  },
  buttonContainer: {
    paddingHorizontal: 30,
  },
  submitButton: {
    backgroundColor: AppTheme.colors.primaryButton,
    borderRadius: 5,
    paddingVertical: 12,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  submitButtonText: {
    color: "#fff",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    paddingHorizontal: 30,
  },
  orText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#999",
  },
  socialButtonsContainer: {
    marginTop: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 25,
    // borderWidth: 2,
    marginBottom: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    color: "#385185",
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#385185",
  },
});
