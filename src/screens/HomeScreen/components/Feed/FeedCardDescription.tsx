import React from "react";
import { Post } from "../../../../models/post";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FeedCardDescriptionProps {
  post: Post;
}

const FeedCardDescription: React.FC<FeedCardDescriptionProps> = (props) => {
  const { post } = props;
  const [expanded, setExpanded] = React.useState(false);
  const descriptionLimit = 50;

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const displayText =
    expanded || post.description.length <= descriptionLimit
      ? post.description
      : `${post.description.slice(0, descriptionLimit)}...`;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        <Text style={styles.username}>{post.user.username}</Text> {displayText}{" "}
        {post.description.length > descriptionLimit && (
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.moreButton}>{expanded ? "less" : "more"}</Text>
          </TouchableOpacity>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 5,
  },
  username: {
    fontWeight: "bold",
  },
  description: {
    flexShrink: 1,
    alignItems: "center",
  },
  moreButton: {
    color: "#9a9a9a",
    fontWeight: "500",
  },
});

export default FeedCardDescription;
