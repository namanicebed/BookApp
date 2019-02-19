import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import ColorReducer from './ColorReducer';
import NavReducer from './NavReducer';
import BookReducer from './BookReducer'
const config = {
  key: 'root',
  storage
}

const AppReducer = persistCombineReducers(config,{
  //color: ColorReducer,
  nav: NavReducer,
  bookReducer: BookReducer
});

export default AppReducer;