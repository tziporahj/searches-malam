import { createStore, combineReducers } from "redux"
import usersReducer from './reducers/users'
// const store = createStore({ combineReducers(usersReducer) })
const reducer = combineReducers({
    usersReducer
}
);

const store = createStore(
    reducer)

// window.store = store;
export default store