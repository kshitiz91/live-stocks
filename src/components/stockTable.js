import React, { Component } from 'react';
import StockRow from './stockRow';
import stockTable from '../css/stockTable.css';

const TableHeadings = ['Ticker', 'Open Price', 'Current Price', 'Change', 'Last Updated']
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
                        <th>{TableHeadings[0]}</th>
                        <th>{TableHeadings[1]}</th>
                        <th>{TableHeadings[2]}</th>
                        <th>{TableHeadings[3]}</th>
                        <th>{TableHeadings[4]}</th>
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