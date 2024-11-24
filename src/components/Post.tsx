import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

interface PostProps {
  post: any;
}
const { width } = Dimensions.get("window");
const columns = 3;
const margin = 5;

const Post: React.FC<PostProps> = ({ post }) => {
  // Dynamic item size based on post size
  const itemSize: any = {
    small: (width - (columns + 1) * margin) / columns - 10,
    medium: (width - (columns + 1) * margin) / columns,
    large: (width - (columns + 1) * margin) / columns * 1.5,
  };

  return (
    <TouchableOpacity
      style={[styles.itemContainer, { width: itemSize[post.size], height: itemSize[post.size] }]}
    >
      <Image source={{ uri: post.uri }} style={styles.image} />
      {post.type === "video" && (
        <View style={styles.videoIconContainer}>
          <Feather name="video" size={20} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: margin,
    backgroundColor: "#ccc",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  videoIconContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 15,
    padding: 2,
  },
});


export default Post;
