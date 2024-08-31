import s from './Dialogs.module.css';
import { Message } from './message/Message';
import { DialogItem } from './dialogItem/DialogItem';
import { DialogsType, MessagesType } from '../../App';
import React, { ChangeEvent } from 'react';
import {
  addNewMessageCreator,
  updateNewMessageCreator
} from '../../redux/state';

type DialogsPropsType = {
  state: {
    messages: MessagesType
    dialogs: DialogsType
  },
  dispatch: (action: {[key: string]: any}) => void
  newMessageText: string
}

export const Dialogs: React.FC<DialogsPropsType> = (
  {
    state: {
      messages,
      dialogs
    }, 
    dispatch,
    newMessageText
  }
) => {
  const dialogElements = dialogs.map(({id, name}) => {
    return <DialogItem name={name} id={id}/>
  })

  const messageElements = messages.map(({message}) => {
    return <Message message={message} />
  })

  const onClickHandler = () => {
    dispatch(addNewMessageCreator())
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateNewMessageCreator(e.currentTarget.value)
    );
  }

  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          {dialogElements}
        </div>
        <div className={s.messages}>
          <div>{messageElements}</div>
          <div>
            <textarea
              placeholder={'type a message'}
              value={newMessageText}
              onChange={onChangeHandler}>
            </textarea>
          </div>
          <div>
            <button onClick={onClickHandler}>send</button>
          </div>
        </div>
      </div>  
    </>
  )
}
