/**
 * TODO: Define models for: 
 * @savedPosts
 * @posts
 * @following
 * @followers 
 * @stories
**/
export interface User  {
    id: string
    username: string
    email: string
    fullname: string
    phone: any
    password: string
    bio: any
    profileImage: string
    followers: any[]
    following: any[]
    posts: any[]
    savedPosts: string[]
    stories: any[]
  }
  