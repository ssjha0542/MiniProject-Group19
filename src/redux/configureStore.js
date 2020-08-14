import {createStore} from 'redux';
import {Reducer,initialState, reducer} from './reducer';


export const ConfigureStore=()=>{
    const store=createStore(reducer,initialState);
    return store;
};

