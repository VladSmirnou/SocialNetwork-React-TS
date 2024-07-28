import { Post } from './post/Post';


export const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        new post
      </div>
      <div className='posts'>
        <Post message="hello world" likes={1} />
        {/* <Post />
        <Post /> */}
      </div>
    </div>
  )
}
