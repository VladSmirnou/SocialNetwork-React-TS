import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './redux/redux-store';
import { Provider as StoreContextProvider } from './StoreContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const reRenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <StoreContextProvider store={store}>
                <App />
            </StoreContextProvider>
        </BrowserRouter>
    );
}

store.subscribe(() => {
    reRenderEntireTree();
});
reRenderEntireTree();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals