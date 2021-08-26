//import {createStore, compose} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import reducer from './reducer';

const logMiddlware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
};

const stringMiddlware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next ({
            type: action
        });
    }
    return next(action);
}

// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = action => {
//     console.log(action.type);
//         return originalDispatch(action);
//     };
    
// return store;
// };

// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = action => {
//     if (typeof action === 'string') {
//         return originalDispatch({
//             type: action
//         });
//     }
//     return originalDispatch;
// };
// return store;
// };

const store = createStore(reducer, applyMiddleware(ThunkMiddleware,stringMiddlware,
    logMiddlware));

    const delayedActionCreator = (timeout) => (dispatch) => {
        setTimeout(() => dispatch ({
            type: 'DELAYED_ACTION'
        }), timeout);
    }
    store.dispatch(delayedActionCreator(3000));

export default store;