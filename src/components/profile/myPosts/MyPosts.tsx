import { Post } from './post/Post';
import s from './MyPosts.module.css';
import { ChangeEvent } from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';

type PostType = {
  id: number
  message: string
  likesCount: number
}

type MyPostsPropsType = {
  updateNewPostText: (text: string) => void
  addPost: () => void
  posts: Array<PostType>
  newPostText: string
}

export const MyPosts = ({
  updateNewPostText,
  addPost,
  posts,
  newPostText
}: MyPostsPropsType) => {
  const postElements = posts.map(({message, likesCount}, idx) => {
    return <Post key={idx} message={message} likes={likesCount} />
  })

  const addPostHandler = () => {
    addPost();
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostText(e.currentTarget.value);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={newPostText} onChange={onPostChange}/> 
          <div>
            <button onClick={addPostHandler}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}
