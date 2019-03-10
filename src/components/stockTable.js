import React, { Component } from 'react';
import StockRow from './stockRow';
import stockTable from '../css/stockTable.css';
import socketIOClient from 'socket.io-client';
export default class StockTable extends Component {
    constructor(props){
        super(props);
        let socket = socketIOClient("ws://stocks.mnet.website");
        socket.on('open',(data)=>{
            console.log(data);
        })
    }
    render(){
        return (
            <div className="row">
            <table className="table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Open Price</th>
                        <th>Current Price</th>
                        <th>Change</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            </div>
        );
    }
}