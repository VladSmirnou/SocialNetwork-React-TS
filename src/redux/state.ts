const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'first', likesCount: 12},
        {id: 2, message: 'second', likesCount: 11},
      ],
      newPostText: ''
    },
    dialogsPage: {
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
  },
  _renderEntireTree: (st: any) => {},

  _callSubscriber(st: any) {
    this._renderEntireTree(st);
  },

  getState() {
    return this._state;   
  },

  subscribe(fn: (st: any) => void) {
    this._renderEntireTree = fn;
  },

  dispatch(action: {[key: string]: any}) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5, message: this._state.profilePage.newPostText, likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_MESSAGE) {
      this._state.dialogsPage.messages.push(
        {id: 4, message: this._state.dialogsPage.newMessageText}
      );
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText
      this._callSubscriber(this._state);
    }
  }
}

export const addPostCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextCreator = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export const addNewMessageCreator = () => ({
  type: ADD_NEW_MESSAGE
})

export const updateNewMessageCreator = (text: string) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text
})