import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

