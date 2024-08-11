import { Post } from './post/Post';
import s from './MyPosts.module.css';


export const MyPosts = () => {

  const posts = [
    {id: 1, message: 'first', likesCount: 12},
    {id: 2, message: 'second', likesCount: 11},
  ]


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
