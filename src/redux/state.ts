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
      ]
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
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5, message: this._state.profilePage.newPostText, likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}
