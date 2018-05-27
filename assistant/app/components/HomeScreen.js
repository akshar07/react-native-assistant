import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
 
class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text>Welcome</Text>
        </View>
       
      </View>
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

const styles = StyleSheet.create({
    menu: {
      position:'absolute',
      flexDirection: 'row',
      bottom: 50,
      marginLeft:10,
      marginRight:10,
      marginBottom:0,
      left: 0,
      backgroundColor: '#FFF',
      borderColor: '#eff0f1',
      shadowColor: '#000',
      width:'95%',
      
    },
    content: {
      flex:1,
      flexDirection:'row',
    },
    text: {
      textAlign: 'justify',
      color: '#333',
      padding:2,
      letterSpacing:0.2,
      fontWeight: 'bold',
    },
    selected: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 12,
      width:'25%',
      borderRightWidth: 1,
       borderTopWidth: 1,
      borderColor : 'black',
        backgroundColor:'#00a55f',
        justifyContent: 'center',
    },
    buttons: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 12,
      width:'25%',
      borderRightWidth: 1,
       borderTopWidth: 1,
      
      borderColor : 'black',
      justifyContent: 'center',
      
    },
    textColor:{
      color:'black',
    }
  });
  
