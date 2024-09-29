import { StyleSheet } from "react-native";
import { AppTheme } from "../../../../constants/styles";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9", // Soft background color for a clean look
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  detailValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "400",
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
  // Styles for Profile Image Upload
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular shape
    borderWidth: 2,
    borderColor: "#E0E0E0",
    marginBottom: 10,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular placeholder
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  imagePlaceholderText: {
    color: "#888",
    fontSize: 14,
    textAlign: "center",
  },
  cancelButtonText: {
    textAlign: "center",
    color: AppTheme.colors.main,
    marginTop: 10,
  },
});
