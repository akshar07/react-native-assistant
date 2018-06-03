import React, { Component } from "react";
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator
} = require("react-native");
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import * as Actions from "../actions";

class News extends Component {
    state = {
        news: false
    };

    componentWillMount = () => {
        this.props.getNews(["business", "entertainment"]); //.then((response) => {
        //console.log(response);
        //this.setState({news:response})
        //});
    };
    render() {
        //console.log(this.props.news)
        /*if(this.props.news){
            this.setState({news:true});
        }*/
        return <Text>NEWS</Text>;
    }
}

function mapStateToProps(state, props) {
    return {
        userProfile: state.dataReducer.userProfile,
        news: state.dataReducer.news
    };
}

export default connect(
    mapStateToProps,
    {
        getNews: Actions.getNews
    }
)(News);
