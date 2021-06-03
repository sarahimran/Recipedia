import isloggedReducer from './loggedin';
import {combineReducers} from 'redux';
import SetInfoReducer from './setUserInfo';



const allreducers = combineReducers({
  login: isloggedReducer,
  info: SetInfoReducer,
});

export default allreducers;