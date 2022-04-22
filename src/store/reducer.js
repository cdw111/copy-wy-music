import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store/reducer";
//调用redux-immutable中的combine函数来合并immutable对象
const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
})


export default cReducer;