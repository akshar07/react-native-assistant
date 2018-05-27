import React, { Component } from 'react';
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
<<<<<<< HEAD
    TouchableHighlight
=======
    Button
>>>>>>> parent of 08813f8... login flow
} = require('react-native');
import Login from "./Login"
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
 
import * as Actions from '../actions';
 
class WelcomeUser extends Component {
    render(){
      console.log("welcome")
      console.log(this.props);
        return (
<<<<<<< HEAD
            <View style={[styles.container,styles.content]}>
                {this.props.userProfile && 
                  <View>
                    <Text style={styles.text}>Mr/Mrs {this.props.userProfile.name}, we are happy to be your day starter, where we can provide
                     you with news based on your preferences, weather for your work, current location, your to do list, trending things, search 
                     all at one place.</Text>
                  </View>
                }
                <TouchableHighlight style={styles.buttons} onPress={() => this.props.navigation.navigate('Setup')}>
                  <Text style={styles.textColor}>Click to continue -></Text>
                </TouchableHighlight>
=======
            <View style={styles.container}>
                <Text>{this.props.userProfile.name}</Text>
>>>>>>> parent of 08813f8... login flow
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
  
