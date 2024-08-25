import s from './Dialogs.module.css';
import { Message } from './message/Message';
import { DialogItem } from './dialogItem/DialogItem';
import { DialogsType, MessagesType } from '../../App';
import React from 'react';


type DialogsPropsType = {
  state: {
    messages: MessagesType
    dialogs: DialogsType
  }
}

export const Dialogs: React.FC<DialogsPropsType> = (
  {
    state: {
      messages,
      dialogs
    }
  }
) => {
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
