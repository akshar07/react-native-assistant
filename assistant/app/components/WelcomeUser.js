import React, { Component } from 'react';
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight
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
      margin:30,
      marginTop:0,
      padding:10,
      backgroundColor: '#FFF',
      borderColor: '#eff0f1',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      borderWidth: 1,
      borderRadius:10,
    },
    content: {
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
      textAlign: 'justify',
      color: '#333',
      padding:2,
      letterSpacing:0.2,
      fontWeight: 'bold',
    },
    buttons: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 20,
      padding: 12,
      borderRadius: 15,
      backgroundColor:'#5fd3a1',
    },
    textColor:{
      color:'white',
    }
  });
  
