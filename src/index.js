import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {fetchItems} from "./redux/asyncAction";



render(
    <Provider store={store}>
        {store.dispatch(fetchItems())}
    <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
