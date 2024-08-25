import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { PostsType } from '../../App';
import React from 'react';


type ProfilePropsType = {
  profilePage: {
    posts: PostsType
  }
  newPostText: string
  dispatch: (action: {[key: string]: any}) => void
}

export const Profile: React.FC<ProfilePropsType> = (
  {
    profilePage: {
      posts
    },
    newPostText,
    dispatch
  }
) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        dispatch={dispatch}
        posts={posts}
        newPostText={newPostText}
      />
    </div>  
  )
}
