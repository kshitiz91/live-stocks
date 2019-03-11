import {lastUpdated} from './lastUpdated';

export const manipulateStockData = (data, prevStockList ) => {
	let stockData = new Map(data);
	let updatedStockData = !prevStockList ? new Map():new Map(prevStockList);
	for(var [key, value] of stockData){
		if(!updatedStockData.has(key)){
			let stockObj = {
				ticker: key,
				openPrice: value,
				currentPrice: value,
				previousPrice: value,
				change : 0,
				timeStamp: Date(),
				lastUpdated: lastUpdated()
			}
			updatedStockData.set(key,stockObj);
		}
		else{
			let prevStock = updatedStockData.get(key);
			let stockObj = {
				ticker: key,
				openPrice : prevStock.openPrice,
				currentPrice: value,
				previousPrice: prevStock.currentPrice,
				change: (prevStock.currentPrice - value),
				timeStamp: prevStock.timeStamp,
				lastUpdated: lastUpdated(prevStock.timeStamp)
			}
			updatedStockData.delete(key);
			updatedStockData.set(key, stockObj);
		}
	}
	return updatedStockData;
}