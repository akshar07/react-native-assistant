import React, { Component } from 'react';
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator
} = require('react-native');
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import NewsPref from './NewsPref';
import Login from './Login';
import * as Actions from '../actions';
 
class Home extends Component {
    render() {
        //console.log("home")
        //console.log(this.props);
        // <Login navigation={this.props.navigation}/>
        //<HomeScreen navigation={this.props.navigation}/>
        //  <NewsPref navigation={this.props.navigation}/>
        //console.disableYellowBox = true;
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