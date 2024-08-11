import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


type PostType = {
  id: number
  message: string
  likesCount: number
}

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

export type PostsType = Array<PostType>;
export type DialogsType = Array<DialogType>;
export type MessagesType = Array<MessageType>;

type AppPropsType = {
  state: {
    profilePage: {
      posts: PostsType
    }
    dialogsPage: {
      messages: MessagesType
      dialogs: DialogsType
    }
  }
}

const App: React.FC<AppPropsType> = (
  {
    state: {
      profilePage
    },
    state: {
      dialogsPage
    }
  }
) => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <NavBar />
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path='/dialogs' element={
              <Dialogs state={dialogsPage} />
            }/>
            <Route path='/profile' element={<Profile state={profilePage}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
