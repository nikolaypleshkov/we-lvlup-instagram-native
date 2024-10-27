import { User } from "./user";

export interface Post {
    id: string;
    user: User;
    description: string;
    posted: number;
    likesCount: number;
    likes: User[];
    commentsCount: number;
    comments: any[]; //TODO: Define
    shareCount: number
    content: string;
    contentType: string;
}
