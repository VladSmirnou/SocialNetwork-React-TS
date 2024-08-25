import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/state';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const reRenderEntireTree = (state: any) => {
    root.render(
        <BrowserRouter>
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />
        </BrowserRouter>
    );
}

store.subscribe(reRenderEntireTree);
reRenderEntireTree(store.getState());
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals