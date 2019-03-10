import React, { Component } from 'react';

export default class StockRow extends Component{
    render(){
        return (
            <tr>
                <td>${this.props.stock.name}</td>
                <td>${this.props.stock.openPrice}</td>
                <td>${this.props.stock.currentPrice}</td>
                <td>${this.props.stock.change}</td>
                <td>${this.props.stock.lastUpdated}</td>
            </tr>
        );
    }
}