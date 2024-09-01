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
  posts: Array<PostType>
  newPostText: string
  dispatch: (action: {[key: string]: any}) => void
}

export const MyPosts = ({posts, newPostText, dispatch}: MyPostsPropsType) => {
  const postElements = posts.map(({message, likesCount}) => {
    return <Post message={message} likes={likesCount} />
  })

  const addPostHandler = () => {
    dispatch(addPostCreator());
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateNewPostTextCreator(e.currentTarget.value)
    );
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
