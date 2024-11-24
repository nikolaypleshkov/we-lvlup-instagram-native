import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { mockPosts } from "../../../utils/mock";

interface PostGrid {
  id: number;
  images: string[];
  videos: string[];
}

const SearchScreenGallery: React.FC = () => {
  const [postsGrid, setPostsGrid] = React.useState<PostGrid[]>([]);

  React.useEffect(() => {
    const grid: PostGrid[] = [];
    let currentImages: string[] = [];
    let currentVideos: string[] = [];
    let gridId = 0;
    let isImageFirst = true;

    mockPosts.forEach((post, index) => {
      if (post.type === "image") {
        currentImages.push(post.uri);
      } else if (post.type === "video") {
        currentVideos.push(post.uri);
      }

      if (currentImages.length === 4 && currentVideos.length === 1) {
        grid.push({
          id: gridId,
          images: [...currentImages],
          videos: [...currentVideos],
        });
        currentImages = [];
        currentVideos = [];
        gridId++;
        isImageFirst = !isImageFirst;
      } else if (index === mockPosts.length - 1) {
        grid.push({
          id: gridId,
          images: [...currentImages],
          videos: [...currentVideos],
        });
      }
    });

    setPostsGrid(grid);
  }, []);

  const renderImages = (images: string[]) => {
    const rows = [];
    for (let i = 0; i < images.length; i += 2) {
      rows.push(images.slice(i, i + 2));
    }

    return (
      <View>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: "row" }}>
            {row.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{
                  width: "50%",
                  height: 150,
                  marginBottom: 2,
                  marginRight: 2,
                }}
              />
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View>
      {postsGrid.map((post, index) => (
        <View key={index} style={{ flexDirection: "row", gap: 2 }}>
          {index % 2 === 0 ? (
            <>
              <View style={{ flex: 1, marginRight: 2.2 }}>{renderImages(post.images)}</View>
              <View style={{ flex: 1, marginVertical: 0 }}>
                {post.videos.map((video, vidIndex) => (
                  <Image
                    key={vidIndex}
                    source={{ uri: video }}
                    style={{ width: "101%", height: 302 }} 
                  />
                ))}
              </View>
            </>
          ) : (
            <>
              <View style={{ flex: 1, marginVertical: 0 }}>
                {post.videos.map((video, vidIndex) => (
                  <Image
                    key={vidIndex}
                    source={{ uri: video }}
                    style={{ width: "101%", height: 302 }} 
                  />
                ))}
              </View>
              <View style={{ flex: 1, marginLeft: 2 }}>{renderImages(post.images)}</View>
            </>
          )}
        </View>
      ))}
    </View>
  );
};

export default SearchScreenGallery;
