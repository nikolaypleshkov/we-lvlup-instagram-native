import React from "react";
import { Post } from "../../../../models/post";
import { StyleSheet, View } from "react-native";
import FeedCardHeader from "./FeedCardHeader";
import FeedCardContent from "./FeedCardContent";
import FeedCardAction from "./FeedCardAction";
import FeedCardDescription from "./FeedCardDescription";

interface FeedCardProps {
  post: Post;
}

const FeedCard: React.FC<FeedCardProps> = (props) => {
  const { post } = props;

  return (
    <View style={styles.container}>
      {/* TODO: Header */}
      <FeedCardHeader user={post.user} />
      {/* TODO: Content */}
      <FeedCardContent post={post} />
      {/* TODO: Likes, comments, shared, save to collection */}
      <FeedCardAction post={post} />
      {/* TODO: User posted, description */}
      <FeedCardDescription post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    gap: 5,
  },
});

export default FeedCard;
