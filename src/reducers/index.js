import {combineReducers} from 'redux';
import stockListReducer from './stockList.reducer';

const rootReducers = combineReducers({
	stockListContent: stockListReducer
});

export default rootReducers;