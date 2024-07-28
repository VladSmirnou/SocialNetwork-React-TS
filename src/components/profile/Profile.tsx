import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';


export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>  
  )
}
