import { Envelope } from "../models/envelope";
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
