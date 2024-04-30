import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import TodoSlice from './slices/todo';
import UserSlice from "./slices/user"
// ----------------------------------------------------------------------

export const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: [],
};


const rootReducer = combineReducers({
    mytodo: TodoSlice,
    user: UserSlice

});

export default rootReducer;