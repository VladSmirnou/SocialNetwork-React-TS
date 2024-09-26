const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type DialogType = {
    id: number
    name: string
};

type MessageType = {
    id: number
    message: string
}

export type DialogsType = Array<DialogType>;
export type MessagesType = Array<MessageType>;

export type DialogsReducerStateType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
}

const initialState: DialogsReducerStateType = {
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrew'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'},
      {id: 5, name: 'Victor'},
      {id: 6, name: 'Valera'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it camasutra'},
      {id: 3, message: 'Yo'},
      {id: 3, message: 'Yo'},
      {id: 3, message: 'Yo'}
    ],
    newMessageText: ''
}

const dialogsReducer = (
    state: DialogsReducerStateType = initialState,
    action: any
) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            state.messages.push(
                {id: 4, message: state.newMessageText}
            );
            state.newMessageText = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText
            return state;
        } default: 
            return state;
    }
}

export const addNewMessageCreator = () => ({
    type: ADD_NEW_MESSAGE
})

export const updateNewMessageCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
})

export default dialogsReducer;