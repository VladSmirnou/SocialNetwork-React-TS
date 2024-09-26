import {
    addNewMessageCreator,
    updateNewMessageCreator
} from '../../redux/dialogs-reducer';
import { StoreContext } from '../../StoreContext';
import { Dialogs } from './Dialogs';

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const state = store.getState().dialogsPage;
          const onClickHandler = () => {
            store.dispatch(addNewMessageCreator())
          }
        
          const onChangeHandler = (text: string) => {
            store.dispatch(updateNewMessageCreator(text));
          }
          return (
            <Dialogs
              updateNewMessageBody={onChangeHandler}
              addNewMessage={onClickHandler}
              dialogsPage={state}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}
