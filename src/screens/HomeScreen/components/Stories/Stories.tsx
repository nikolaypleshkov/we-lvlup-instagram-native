import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Stories.styles";
import UserAvatar from "../../../../components/UserProfileAvatar";
import Icon from "react-native-vector-icons/Entypo";

const mockStories = [
  {
    id: "1",
    username: "john_doe",
    image: "https://via.placeholder.com/150",
    upload: false,
  },
  {
    id: "2",
    username: "jane_doe",
    image: "https://via.placeholder.com/150",
    upload: false,
  },
  {
    id: "3",
    username: "sam_smith",
    image: "https://via.placeholder.com/150",
    upload: false,
  },
  {
    id: "4",
    username: "alex_jones",
    image: "https://via.placeholder.com/150",
    upload: false,
  },
  {
    id: "5",
    username: "chris_lee",
    image: "https://via.placeholder.com/150",
    upload: false,
  },
];

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ id: "0", upload: true, image: "" }, ...mockStories]}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.upload ? (
            <View style={styles.avatarContainer}>
              <UserAvatar
                imageUri="https://via.placeholder.com/150"
                size={60}
              />
              <TouchableOpacity style={styles.addIcon}>
                <Icon name="plus" color="#fff" />
              </TouchableOpacity>

              <Text style={styles.username}>Your story</Text>
            </View>
          ) : (
            <View style={styles.avatarContainer}>
              <UserAvatar imageUri={item.image} size={60} />
              <Text style={styles.username}>Name</Text>
            </View>
          )
        }
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;
