import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,AsyncStorage
} from 'react-native';
let logo = require('../images/logo.png');
import { connect } from 'react-redux';
import * as Actions from '../actions';
import WelcomeUser from './WelcomeUser';
import FBSDK, { LoginManager,LoginButton,AccessToken,GraphRequest,GraphRequestManager } from 'react-native-fbsdk';

class Login extends Component {
  state = {
    user: undefined,
    loggedIn:false,
  };

  componentWillMount = () => {
    this.checkLoggedIn();
  }

  checkLoggedIn = () => {
    AsyncStorage.getItem('userId').then((value) => {
      if(value !== null){
        this.setState({loggedIn:true})
         this.props.getUserProfile(value);//.then((response) => {
        //   console.log("gotdata");
        //   console.log(response);
        // });
      }
    });
  }

  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.props.saveUserProfile(result);
      AsyncStorage.setItem('userId', result.id);
    } 
  }

  render() {
    console.log("login")
    console.log(this.props);
    return (
      <View style={styles.body}>
       <View style={styles.container}>
        <Image source={logo} style={[styles.avatar,styles.avatarImage]}/>
        <Text style={[styles.header,styles.text]}>Welcome to the Assistant</Text>
       </View>
      {!this.state.loggedIn && <View style={styles.container}>
          <LoginButton
            readPermissions={["public_profile"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed with error: " + error.message);
                } else if (result.isCancelled) {
                  alert("Login was cancelled");
                } else {
                  
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      const infoRequest = new GraphRequest(
                        '/me?fields=name,picture,email',
                        null,
                        this._responseInfoCallback
                      );
                      new GraphRequestManager().addRequest(infoRequest).start();
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("User logged out")}/>
          </View>
        }
        {this.state.loggedIn && <WelcomeUser navigation={this.props.navigation}/>} 
      </View>
    )
  }
}
 
 
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data,
        userProfile:state.dataReducer.userProfile,
    }
}

//Connect everything
export default connect(mapStateToProps, {
    saveUserProfile: Actions.saveProfile,
    getUserProfile: Actions.getUserProfile,
})(Login);


const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    marginTop:'20%',
    margin:30,
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
  body: {
    backgroundColor:'#fafafa',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginLeft: 50,
  },
  avatarImage: {
    borderRadius: 10,
    height: 200,
    width: 200,
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
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
