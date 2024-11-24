import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./Feed.styles";
import { postsResponseMock } from "../../../../utils/mock";
import { Post } from "../../../../models/post";
import { Envelope } from "../../../../models/envelope";
import FeedCard from "./FeedCard";

const mockFetchPosts = (): Promise<Envelope<Post[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(postsResponseMock);
    }, 1000);
  });
};

const Feed = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    mockFetchPosts()
      .then((response) => {
        if (response.status === "success" && response.data) {
          setPosts(response.data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
      });
  }, []);

  return (
    <View style={styles.fullHeightContainer}>
      {/* <ScrollView style={styles.container}> */}
        {posts.map((post) => (
          <FeedCard key={post.id} post={post} />
        ))}
    </View>
  );
};

export default Feed;
