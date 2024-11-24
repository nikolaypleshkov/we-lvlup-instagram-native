import React from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header";
import Feed from "./components/Feed/Feed";
import Stories from "./components/Stories/Stories";

const HomeScreen = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [prevScrollY, setPrevScrollY] = React.useState(0);
  const [isScrollingUp, setIsScrollingUp] = React.useState(true);
  const headerHeight = 160;

  const translateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 2],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true,
      listener: (event) => {
        const currentScrollY = (event.nativeEvent as any).contentOffset.y;

        if (currentScrollY < prevScrollY && !isScrollingUp) {
          // Scrolling up
          setIsScrollingUp(true);
        } else if (currentScrollY > prevScrollY && isScrollingUp) {
          // Scrolling down
          setIsScrollingUp(false);
        }
        setPrevScrollY(currentScrollY);
      },
    }
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.headerContainer,
          {
            transform: [{ translateY: isScrollingUp ? 0 : translateY }],
            opacity: isScrollingUp ? 1 : opacity,
          },
        ]}
      >
        <Header />
      </Animated.View>
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollViewContainer}
      >
        <Stories />
        <Feed />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  headerContainer: {
    position: "static",
    top: 10,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    paddingVertical: 10,
  },
});
