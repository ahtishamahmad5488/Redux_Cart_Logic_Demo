import {createStore} from 'redux';
import rootReducer from './rootReducer';

export const myStore = createStore(rootReducer);
