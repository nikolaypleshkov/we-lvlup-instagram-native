import React from "react";
import { Post } from "../../../../models/post";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface FeedCardActionProps {
  post: Post;
}

const FeedCardAction: React.FC<FeedCardActionProps> = (props) => {
  const { post } = props;

  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={25} />
          <Text style={styles.actionButtonText}>{post.likesCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="message-circle" size={25} />
          <Text style={styles.actionButtonText}>{post.commentsCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="send" size={25} />
          <Text style={styles.actionButtonText}>{post.shareCount}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
      <View>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="bookmark" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  actionContainer: {
    flexDirection: "row",
    gap: 13,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButtonText: {
    fontWeight: "bold",
  },
  saveAction: {},
  spacer: {
    flex: 1,
  },
});

export default FeedCardAction;
