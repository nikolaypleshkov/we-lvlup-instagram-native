import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";

const Header: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectFeedOption = (option: any) => {
    // TODO: Navigate to the selected feed
  };

  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}
        >
          <Text style={styles.dropdownButtonText}>For you</Text>
          <Icon name="down" size={12} color="#000" />
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => selectFeedOption("Following")}
            >
              <FeatherIcon name="users" size={15} />
              <Text style={styles.dropdownItemText}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => selectFeedOption("Favorites")}
            >
              <FeatherIcon name="star" size={15} />
              <Text style={styles.dropdownItemText}>Favorites</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.gap} />
      <TouchableOpacity style={styles.dropdownButton}>
        <FeatherIcon name="plus-square" size={22} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownButton}>
        <FeatherIcon name="heart" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    position: "relative",
    flexDirection: "row",
    alignItems: 'flex-end',
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
    fontSize: 22,
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
