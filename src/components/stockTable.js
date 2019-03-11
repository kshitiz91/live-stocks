import React, { Component } from 'react';
import StockRow from './stockRow';
import stockTable from '../css/stockTable.css';

export default class StockTable extends Component {
    constructor(props){
				super(props);
				this.createStockRow = this.createStockRow.bind(this);
		}
		createStockRow(){
			var items = [];
			for(var [key,value] of new Map(this.props.stockList) )
			{
				items.push(<StockRow key ={key} stock={value} />);
			}
			return items;
		}
    render(){
        return (
            <div className="row">
            <table className="table-hover">
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Open Price</th>
                        <th>Current Price</th>
                        <th>Change</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
									{this.createStockRow()}
                </tbody>
            </table>
            </div>
        );
    }
}