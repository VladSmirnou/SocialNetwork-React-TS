import { Post } from './post/Post';
import s from './MyPosts.module.css';


type PostType = {
  id: number,
  message: string,
  likesCount: number
}

type MyPostsPropsType = {
  posts: Array<PostType>
}

export const MyPosts = ({posts}: MyPostsPropsType) => {
  const postElements = posts.map(({message, likesCount}) => {
    return <Post message={message} likes={likesCount} />
  })

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id=""></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}
