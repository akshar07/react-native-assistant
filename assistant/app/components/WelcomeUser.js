import React, { Component } from 'react';
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    Button
} = require('react-native');
import Login from "./Login"
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
 
import * as Actions from '../actions';
 
class WelcomeUser extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>{this.props.userProfile.name}</Text>
            </View>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        userProfile : state.dataReducer.userProfile,
    }
}

export default connect(mapStateToProps, {
    saveUserProfile : Actions.saveProfile,
})(WelcomeUser);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      margin: 20,
    },
    avatarImage: {
      borderRadius: 50,
      height: 100,
      width: 100,
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    text: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 5,
    },
    buttons: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 20,
      marginBottom: 30,
    },
  });
  
