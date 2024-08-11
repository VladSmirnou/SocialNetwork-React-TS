const posts = [
  {id: 1, message: 'first', likesCount: 12},
  {id: 2, message: 'second', likesCount: 11},
];

const dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Valera'}
]

const messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it camasutra'},
  {id: 3, message: 'Yo'},
  {id: 3, message: 'Yo'},
  {id: 3, message: 'Yo'}
];

export const state = {
  profilePage: {
    posts,
  },
  dialogsPage: {
    messages,
    dialogs
  }
}