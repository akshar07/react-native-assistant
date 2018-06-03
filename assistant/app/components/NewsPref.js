import React, { Component } from "react";
var {
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  Picker,
  Button
} = require("react-native");
import { WeatherWidget } from "react-native-weather";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

class NewsPref extends Component {
  state = {
    language: "Java",
    business: false,
    entertainment: false,
    health: false,
    science: false,
    sports: false,
    technology: false,
    categories: []
  };

  categoryPress = text => {
    let temp = this.state.categories.slice();
    let index = temp.indexOf(text);
    if (index != -1) {
      temp.splice(index, 1);
    } else {
      temp.push(text);
    }
    this.setState({ categories: temp });
    if (text === "business") {
      this.setState({ business: !this.state[text] });
    } else if (text === "entertainment") {
      this.setState({ entertainment: !this.state[text] });
    } else if (text === "health") {
      this.setState({ health: !this.state[text] });
    } else if (text === "science") {
      this.setState({ science: !this.state[text] });
    } else if (text === "sports") {
      this.setState({ sports: !this.state[text] });
    } else if (text === "technology") {
      this.setState({ technology: !this.state[text] });
    }
  };

  saveNewsPref = () => {
    //console.log(this.props);
    this.props.saveNewsPref(
      this.props.userProfile.userId,
      this.state.categories
    );
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    //console.log(this.state.categories)
    let categories = [
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology"
    ];
    let buttons = categories.map(name => {
      return (
        <TouchableHighlight
          style={this.state[name] ? styles.selectedButton : styles.buttons}
          onPress={this.categoryPress.bind(this, name)}
          key={name}
        >
          <Text style={styles.textColor}>{name}</Text>
        </TouchableHighlight>
      );
    });
    return (
      <View style={[styles.container, styles.content]}>
        <View>
          <Text>
            Please select the categories of news you are intrested in:{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start"
            }}
          >
            {buttons}
          </View>
        </View>
        <WeatherWidget
          api={"db8db5734ecd596de552d5eb50eac8a6"}
          lat={"37.3537"}
          lng={"-122.0307"}
        />
        <TouchableHighlight
          style={styles.doneButton}
          onPress={this.saveNewsPref}
        >
          <Text style={styles.doneTextColor}>Done</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userProfile: state.dataReducer.userProfile
  };
}

export default connect(
  mapStateToProps,
  {
    saveUserProfile: Actions.saveProfile,
    saveNewsPref: Actions.saveNewsPref
  }
)(NewsPref);

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFF",
    borderColor: "#eff0f1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderWidth: 1,
    borderRadius: 10,
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  content: {
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    margin: 20
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  text: {
    textAlign: "justify",
    color: "#333",
    padding: 2,
    letterSpacing: 0.2,
    fontWeight: "bold"
  },
  buttons: {
    margin: 12,
    marginLeft: 0,
    padding: 12,
    borderRadius: 15,
    backgroundColor: "#5fd3a1"
  },
  doneButton: {
    position: "relative",
    bottom: 10,
    width: "40%",
    margin: 15,
    padding: 12,
    borderRadius: 15,
    backgroundColor: "#5fd3a1"
  },
  selectedButton: {
    margin: 12,
    marginLeft: 0,
    padding: 12,
    borderRadius: 15,
    backgroundColor: "#00a55f"
  },
  textColor: {
    color: "white",
    textAlign: "center",
    fontWeight: "800"
  },
  doneTextColor: {
    color: "white",
    textAlign: "center",
    fontWeight: "800"
  },
  SelectedColor: {
    color: "white",
    textAlign: "center",
    fontWeight: "800"
  }
});
