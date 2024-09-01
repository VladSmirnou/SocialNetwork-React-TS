const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state: any, action: any) => {
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