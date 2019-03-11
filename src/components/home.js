import React, { Component } from 'react';
import StockTable from './stockTable';
import { connect } from 'react-redux';
import {requestStockListAction} from '../actions';
class Home extends Component {

	constructor (props){
		super(props);
	}
	componentDidMount(){
		this.props.dispatch(requestStockListAction());
	}

    render (){
        return(
            <StockTable stockList={this.props.stockList} />
        );
    }
}

const mapStateToProps = ({stockListContent})=>{
	return ({
		stockList: stockListContent.stockList
	})
};

export default connect(mapStateToProps)(Home);