import React, { Component } from 'react';
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    Button
} = require('react-native');
 
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
 
import * as Actions from '../actions';
 
class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:props.data
        }
    }
 
    componentWillMount() {
        this.props.getData();
        console.log(this.props.data)
        this.setState({
            data:this.props.data
        })
    }

    handleChange = () => {
        this.props.changeData();
        console.log(this.props.data)
        this.setState({
            data:this.props.data
        })
    }
 
    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator
                        animating={true}
                        style={[{height: 80}]}
                        size="small"
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={styles.title}>
                        hello welcome + {this.props.data}
                    </Text> 
                    <Button
                    onPress={this.handleChange}
                    title="Change"
                    color="#841584"
                    />
            </View> 
            );
        }
    }
 
    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(rowID) + 1)}{". "}
                </Text>
            </View>
        )
    }
};
 
 
 
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}
 
// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
 
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
 
var styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
 
    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        // height: 50,
        padding: 10
    },
 
    title:{
        fontSize: 15,
        fontWeight: "600"
    },
 
    description:{
        marginTop: 5,
        fontSize: 14,
    }
});