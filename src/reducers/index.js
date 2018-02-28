import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import sliderReducer from './sliderReducer';

export default combineReducers({
  header: headerReducer,
  slider: sliderReducer
});
