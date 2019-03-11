import {fork} from 'redux-saga/effects'
import watchStockListSaga from './stockList.saga'

export default function *rootSaga(){
	yield fork(watchStockListSaga);
}