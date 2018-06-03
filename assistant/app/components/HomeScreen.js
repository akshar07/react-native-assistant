import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import BottomNavigation, {
  IconTab,
  Badge
} from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import News from "./News";

class Home extends Component {
  tabs = [
    {
      key: "Home",
      label: "Home",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "home"
    },
    {
      key: "News",
      label: "News",
      barColor: "#00695C",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "file"
    },
    {
      key: "Search",
      label: "Search",
      barColor: "#6A1B9A",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "search"
    },
    {
      key: "Settings",
      label: "Settings",
      barColor: "#1565C0",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "cog"
    }
  ];

  state = {
    activeTab: this.tabs[0]
  };

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <IconTab
      isActive={isActive}
      showBadge={tab.key === this.state.activeTab.key}
      renderBadge={() => <Badge>Active</Badge>}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          {this.state.activeTab.key === "News" && <News />}
          {this.state.activeTab.key === "Home" && <Text>Home</Text>}
          {this.state.activeTab.key === "Search" && <Text>SEARCH</Text>}
          {this.state.activeTab.key === "Settings" && <Text>SETTINGS</Text>}
        </View>
        <BottomNavigation
          onTabPress={activeTab => this.setState({ activeTab })}
          renderTab={this.renderTab}
          useLayoutAnimation
          tabs={this.tabs}
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    flexDirection: "row",
    bottom: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    left: 0,
    backgroundColor: "#FFF",
    borderColor: "#eff0f1",
    shadowColor: "#000",
    width: "95%"
  },
  content: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    textAlign: "justify",
    color: "#333",
    padding: 2,
    letterSpacing: 0.2,
    fontWeight: "bold"
  },
  selected: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 12,
    width: "25%",
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: "black",
    backgroundColor: "#00a55f",
    justifyContent: "center"
  },
  buttons: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 12,
    width: "25%",
    borderRightWidth: 1,
    borderTopWidth: 1,

    borderColor: "black",
    justifyContent: "center"
  },
  textColor: {
    color: "black"
  }
});
