import { ChangeEvent } from 'react';
import { DialogsReducerStateType } from '../../redux/dialogs-reducer';
import { DialogItem } from './dialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './message/Message';

type DialogsPropsType = {
  updateNewMessageBody: (text: string) => void
  addNewMessage: () => void
  dialogsPage: DialogsReducerStateType
}

export const Dialogs = ({ 
  updateNewMessageBody,
  addNewMessage,
  dialogsPage
}: DialogsPropsType) => {

  const dialogElements = dialogsPage.dialogs.map(({id, name}) => {
    return <DialogItem name={name} id={id}/>
  })

  const messageElements = dialogsPage.messages.map(({message}) => {
    return <Message message={message} />
  })

  const onClickHandler = () => addNewMessage();

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewMessageBody(e.currentTarget.value)
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
              value={dialogsPage.newMessageText}
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
