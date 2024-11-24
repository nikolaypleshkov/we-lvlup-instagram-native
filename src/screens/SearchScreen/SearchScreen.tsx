import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./SearchScreen.styles";
import SearchScreenGallery from "./components/SearchScreenGallery";
import SearchUsersList from "./components/SearchUsersList";

const SearchScreen = () => {
  const [openSearch, setOpenSearch] = React.useState(false);

  const handleFilterPress = () => {
    // TODO: Implement filter functionality
    console.log("Filter button pressed");
  };

  const handleOpenSearchScreen = () => {
    setOpenSearch((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      {openSearch && (
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
            position: "absolute",
            top: 57,
            zIndex: 30000,
          }}
        >
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onTouchStart={handleOpenSearchScreen}
          />
          <TouchableOpacity
            onPress={handleOpenSearchScreen}
            style={styles.filterButton}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onTouchStart={handleOpenSearchScreen}
          />

          {!openSearch ? (
            <TouchableOpacity
              onPress={handleFilterPress}
              style={styles.filterButton}
            >
              <Feather name="more-horizontal" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleOpenSearchScreen}
              style={styles.filterButton}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
        <SearchScreenGallery />
      </ScrollView>
      {openSearch && <SearchUsersList />}
    </SafeAreaView>
  );
};

export default SearchScreen;
