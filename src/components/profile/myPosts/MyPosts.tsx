import { Post } from './post/Post';
import s from './MyPosts.module.css';
import { useRef } from 'react';


type PostType = {
  id: number
  message: string
  likesCount: number
}

type MyPostsPropsType = {
  posts: Array<PostType>
  addPost: (postM: string) => void
}

export const MyPosts = ({posts, addPost}: MyPostsPropsType) => {
  const postElements = posts.map(({message, likesCount}) => {
    return <Post message={message} likes={likesCount} />
  })

  const newPostElement = useRef<HTMLTextAreaElement | null>(null);

  const addPostHandler = () => {
    const text = newPostElement.current?.value;
    if (text) {
      addPost(text);
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
