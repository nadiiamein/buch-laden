import {createStore,compose} from 'redux';
import reducer from './reducer';

const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = stote.dispatch;
    store.dispatch = action => {
    console.log(action.type);
        return originalDispatch(action);
    };
    
return store;
};

const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = stote.dispatch;
    store.dispatch = action => {
    if (typeof action === 'string') {
        return originalDispatch({
            type: action
        });
    }
    return originalDispatch;
}
return store;
}

const store = createStore(reducer, compose(stringEnhancer,
    logEnhancer) );

export default store;