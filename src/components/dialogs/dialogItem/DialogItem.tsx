import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';


type DialogItemPropsType = {
  name: string
  id: number
}

export const DialogItem = ({name, id}: DialogItemPropsType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}
