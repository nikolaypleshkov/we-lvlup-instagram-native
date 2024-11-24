import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get("window");
const tileSize = width / 3 - 10;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  filterButton: {
    marginLeft: 10,
  },
  gridContainer: {
    padding: 10,
  },
  tile: {
    width: tileSize,
    height: tileSize,
    margin: 1,
  },
});