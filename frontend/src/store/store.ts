// import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';

interface IWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
}


const store = configureStore({
    reducer: reducers,
    devTools:(window as IWindow).__REDUX_DEVTOOLS_EXTENSION__ && (window as IWindow).__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;   