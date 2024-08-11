import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { PostsType } from '../../App';
import React from 'react';


type ProfilePropsType = {
  state: {
    posts: PostsType
  }
  addPost: (postM: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (
  {
    state: {
      posts
    },
    addPost
  }
) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost}/>
    </div>  
  )
}
