import React, { Component } from 'react';
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator
} = require('react-native');
import Login from "./Login"
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import Login from './Login';
 
import * as Actions from '../actions';
 
class Home extends Component {
<<<<<<< HEAD
    
=======
    constructor(props) {
        super(props);
        this.state={
            data:props.data
        }
    }
 
    componentWillMount() {
        this.props.getData();
        //console.log(this.props.data)
        this.setState({
            data:this.props.data
        })
    }

    handleChange = () => {
        this.props.changeData();
        //console.log(this.props.data)
        this.setState({
            data:this.props.data
        })
    }
 
>>>>>>> parent of 08813f8... login flow
    render() {
        console.log("home")
        console.log(this.props);
        // <Login navigation={this.props.navigation}/>
        return (
           
            <Login navigation={this.props.navigation}/>
        )
    }
};
 
 
function mapStateToProps(state, props) {
    return {}
}
 
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
 
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);