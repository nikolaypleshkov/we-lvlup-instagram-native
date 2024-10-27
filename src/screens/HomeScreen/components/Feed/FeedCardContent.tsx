import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Post } from "../../../../models/post";

interface FeedCardContentProps {
  post: Post;
}

const FeedCardContent: React.FC<FeedCardContentProps> = (props) => {
  const { post } = props;

  return (
    <View style={cardContentStyles.container}>
      <Image source={{ uri: post.content }} 
          style={cardContentStyles.content} />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const cardContentStyles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenWidth,
  },
  content: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
});

export default FeedCardContent;
