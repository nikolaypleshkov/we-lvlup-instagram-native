import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: "#fff",
    position: "relative",
    flexDirection: "row",
    gap: 22,
  },
  gap: {
    flex: 1,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  dropdownButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdownMenu: {
    position: "absolute",
    top: 50,
    left: 15,
    right: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    zIndex: 10,
    width: 120,
  },
  dropdownItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 15,
  },
  dropdownItemText: {
    fontSize: 16,
  },
});
