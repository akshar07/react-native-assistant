import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import FBSDK, { LoginManager,LoginButton } from 'react-native-fbsdk';

class Login extends Component {
  state = {
    user: undefined, // user has not logged in yet
  };

<<<<<<< HEAD
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

=======
>>>>>>> parent of 08813f8... login flow
  render() {
    console.log("login")
    console.log(this.props);
    return (
      <View style={styles.container}>
         <LoginButton
          readPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
<<<<<<< HEAD
            onLogoutFinished={() => alert("User logged out")}/>
          </View>
        }
        {this.state.loggedIn && <WelcomeUser navigation={this.props.navigation}/>} 
=======
          }
          onLogoutFinished={() => alert("User logged out")}/>
>>>>>>> parent of 08813f8... login flow
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
})(Login);


const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    marginTop:'20%',
    margin:30,
    padding:10,
=======
    flex: 1,
    margin:100,
>>>>>>> parent of 08813f8... login flow
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
