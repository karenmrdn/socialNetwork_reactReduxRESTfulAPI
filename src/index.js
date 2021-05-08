import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

/*setInterval(() => {
    store.dispatch({type: 'FAKE'})
}, 1000)*/

ReactDOM.render(
    /*<React.StrictMode>*/
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    /*</React.StrictMode>*/,
    document.getElementById('root')
);


/*store.subscribe(() => {
    rerenderEntireTree(store.getState())
});*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();