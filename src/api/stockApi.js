import {eventChannel, END } from 'redux-saga';

const endpoint  =  "ws://stocks.mnet.website";


export const createWebSocketConnection = ()=>{
	return new Promise((resolve, reject)=>{
		const socket = new WebSocket(endpoint);
		socket.onopen = ()=>{
			resolve(socket);
		}
		socket.onerror = (err)=>{
			reject(err);
		}
	});
}
export const getStockList = (socket) => {
	return eventChannel(emit=>{
		 socket.onmessage = (event) => {
		 	emit(JSON.parse(event.data));
		 };
		 socket.onclose = ()=>{
			 emit(END);
		 }
		 const unsubscribe = ()=>{
			 socket.onmessage = null;
		 }
		 return unsubscribe;
	})
}