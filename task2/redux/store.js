import {createStore} from 'redux'
import profileReducer from './profile/profileReducer';

const store = createStore(profileReducer)

export default store;