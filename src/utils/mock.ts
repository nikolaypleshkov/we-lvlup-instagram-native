import { Envelope } from "../models/envelope";
import { Post } from "../models/post";
import { User } from "../models/user";

export const userResponseMock: Envelope<User> = {
  timestamp: "2024-10-17T15:13:33.351Z",
  status: "OK",
  message: null,
  data: {
    id: "8dca5335-94ca-4b83-a959-cab0ad9f81eb",
    username: "n1.pleshkov",
    email: "pleshkovn1kk@gmail.com",
    fullname: "Nikolay Pleshkov",
    phone: null,
    password: "",
    bio: null,
    profileImage:
      "https://avatars.githubusercontent.com/u/47944944?v=4",
    followers: [],
    following: [],
    posts: [],
    savedPosts: [],
    stories: [],
  },
};

export const postsResponseMock: Envelope<Post[]> = {
  timestamp: new Date().toISOString(),
  status: "success",
  message: null,
  data: [
    {
      id: "1",
      user: {
        id: "user_001",
        username: "johndoe",
        email: "johndoe@example.com",
        fullname: "John Doe",
        phone: "123-456-7890",
        password: "password123", // This is just for mock purposes
        bio: "Travel enthusiast and food lover 🌍🍜",
        profileImage: "https://avatars.githubusercontent.com/u/47944944?v=4",
        followers: [
          { id: "user_002", username: "janedoe" },
          { id: "user_003", username: "alexsmith" }
        ],
        following: [
          { id: "user_002", username: "janedoe" },
          { id: "user_004", username: "travelbuddy" }
        ],
        posts: ["post_001", "post_002"],
        savedPosts: ["post_005", "post_007"],
        stories: ["story_001", "story_002"]
      },
      description: `Exploring the beautiful city of Paris! ,
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
       #travel #wanderlust`,
      posted: Date.now(),
      likesCount: 345,
      likes: [
        { id: "user_002", username: "janedoe", email: "janedoe@example.com", fullname: "Jane Doe", phone: null, password: "", bio: null, profileImage: "https://example.com/janedoe.jpg", followers: [], following: [], posts: [], savedPosts: [], stories: [] },
        { id: "user_003", username: "alexsmith", email: "alexsmith@example.com", fullname: "Alex Smith", phone: null, password: "", bio: null, profileImage: "https://example.com/alexsmith.jpg", followers: [], following: [], posts: [], savedPosts: [], stories: [] }
      ],
      commentsCount: 2,
      comments: [
        { user: { id: "user_002", username: "janedoe" }, text: "Amazing shot! Looks beautiful." },
        { user: { id: "user_003", username: "alexsmith" }, text: "Enjoy your trip!" }
      ],
      shareCount: 50,
      content: "https://images.unsplash.com/photo-1729719382611-25bbdd3fc345?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      contentType: "img"
    },
    {
      id: "2",
      user: {
        id: "user_004",
        username: "travelbuddy",
        email: "travelbuddy@example.com",
        fullname: "Travel Buddy",
        phone: "987-654-3210",
        password: "password123", // This is just for mock purposes
        bio: "Sharing my travel adventures ✈️📸",
        profileImage: "https://avatars.githubusercontent.com/u/47944944?v=4",
        followers: [
          { id: "user_001", username: "johndoe" }
        ],
        following: [
          { id: "user_003", username: "alexsmith" },
          { id: "user_002", username: "janedoe" }
        ],
        posts: ["post_003"],
        savedPosts: ["post_004", "post_006"],
        stories: ["story_003"]
      },
      description: "Sunset vibes in Bali 🌅 #paradise",
      posted: Date.now(),
      likesCount: 780,
      likes: [
        { id: "user_001", username: "johndoe", email: "johndoe@example.com", fullname: "John Doe", phone: null, password: "", bio: null, profileImage: "https://avatars.githubusercontent.com/u/47944944?v=4", followers: [], following: [], posts: [], savedPosts: [], stories: [] }
      ],
      commentsCount: 3,
      comments: [
        { user: { id: "user_001", username: "johndoe" }, text: "This looks unreal!" },
        { user: { id: "user_003", username: "alexsmith" }, text: "Bucket list location right there!" },
        { user: { id: "user_002", username: "janedoe" }, text: "I want to go there too!" }
      ],
      shareCount: 85,
      content: "https://images.unsplash.com/photo-1729465848877-3b4a76dc7f74?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      contentType: "img"
    }
  ]
};
