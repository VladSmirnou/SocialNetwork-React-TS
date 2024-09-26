import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

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
    },
    sidebar: {}
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}
