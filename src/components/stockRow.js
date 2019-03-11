import React, { Component } from 'react';

export default class StockRow extends Component{
		constructor(props){
			super(props);
			this.settingClassName = this.settingClassName.bind(this);
		}
		settingClassName(){
			var lastClass, changeClass, iconClass;
			if (this.props.stock.change < 0) {
				lastClass = 'last-negative';
				changeClass = 'change-negative';
				iconClass = 'glyphicon glyphicon-triangle-bottom';
			} else if(this.props.stock.change > 0){
				lastClass = 'last-positive';
				changeClass = 'change-positive';
				iconClass = 'glyphicon glyphicon-triangle-top';
			}else{
				lastClass = '';
				changeClass = '';
				iconClass = '';
			}
			return {
				lastClass,
				changeClass,
				iconClass
			}
		}
    render(){
				var {lastClass, changeClass, iconClass} = this.settingClassName();
        return (
            <tr>
                <td>{this.props.stock.ticker}</td>
                <td>{this.props.stock.openPrice}</td>
                <td className ={lastClass}>{this.props.stock.currentPrice}</td>
                <td className={changeClass} >{this.props.stock.change}<span className={iconClass} aria-hidden="true"></span></td>
                <td>{this.props.stock.lastUpdated}</td>
            </tr>
        );
    }
}