import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <NavBar />
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path='/profile' Component={Profile}/>
            <Route path='/dialogs' Component={Dialogs}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
