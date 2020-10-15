import { combineReducers } from 'redux'
import { tvShow, episodes } from './modules'
const rootReducers = {
    tvShow,
    episodes,
};
export default combineReducers(rootReducers);
