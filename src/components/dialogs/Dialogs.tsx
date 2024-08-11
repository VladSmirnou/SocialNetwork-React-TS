import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


type DialogItemPropsType = {
  name: string
  id: number
}

const DialogItem = ({name, id}: DialogItemPropsType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}

type MessagePropsType = {
  message: string
}

const Message = ({message}: MessagePropsType) => {
  return (
    <div className={s.message}>{message}</div>
  )
}


export const Dialogs = (props: any) => {
  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
  ]
  
  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it camasutra'},
    {id: 3, message: 'Yo'},
    {id: 3, message: 'Yo'},
    {id: 3, message: 'Yo'}
  ]

  const dialogElements = dialogs.map(({id, name}) => {
    return <DialogItem name={name} id={id}/>
  })

  const messageElements = messages.map(({message}) => {
    return <Message message={message} />
  })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>  
  )
}
