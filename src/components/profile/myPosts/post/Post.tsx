import s from './Post.module.css';

type PostPropsType = {
  message: string
  likes: number
}

export const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      {props.message}
      <span>{props.likes}</span>
    </div>
  )
}
