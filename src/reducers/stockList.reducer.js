import * as actionType from '../actionsTypes';

const initialState = {};
export default function stockListReducer(state = initialState,  action) {
	switch (action.type) {
		case actionType.FETCH_STOCK_LIST_SUCCESS:
				return  {...state , stockList:action.stockList};
		default:
			return state;
	}

}