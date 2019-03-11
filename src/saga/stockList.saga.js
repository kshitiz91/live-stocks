import {takeLatest, put, call, take} from 'redux-saga/effects';
import * as actionType from '../actionsTypes';
import {manipulateStockData} from '../utils/generateStockData'
import {createWebSocketConnection,getStockList} from '../api/stockApi';

function *getStockListSaga(){
	let socket;
	let socketChannel;
	let prevStockList;
	try{
		socket = yield call (createWebSocketConnection);
		socketChannel = yield call(getStockList, socket, prevStockList);
		while (true){
			let stockData = yield take(socketChannel);
			let stockList = manipulateStockData(stockData, prevStockList);
			prevStockList = stockList;
			yield put({type: actionType.FETCH_STOCK_LIST_SUCCESS, stockList});
		}
	}
	catch (err){
			yield put({type: actionType.FETCH_STOCK_LIST_FAILURE, err});
	}
}

export default function* watchStockListSaga() {
	yield takeLatest(actionType.FETCH_STOCK_LIST_REQUEST, getStockListSaga);
}