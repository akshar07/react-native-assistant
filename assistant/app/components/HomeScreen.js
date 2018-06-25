import React, { Component } from "react";
import { View, StyleSheet, Image, Text, AsyncStorage } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import BottomNavigation, {
  IconTab,
  Badge
} from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import News from "./News";
import HomeTab from "./HomeTab";
import NewsPref from "./NewsPref";
import Search from "./Search";
//import ThingTranslator from "./ThingTranslator";

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
    activeTab: this.tabs[0],
    news: "",
  };

  componentWillMount = () => {
    this.getNews();
  };

  getNews = () => {
    //let news = ["business", "entertainment"];
    AsyncStorage.getItem("NewsPref").then(value => {
      if (value != null) {
        let temp = value.split("||");
        this.setState({news:temp});
        this.props.getNews(temp);
      } else {
        this.props.getNews(news);
      }
    });
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
        <View style={{ flex: 1 }}>
          {this.state.activeTab.key === "News" && <News newsCat={this.state.news} />}
          {this.state.activeTab.key === "Home" && <HomeTab />}
          {this.state.activeTab.key === "Search" && <Search />}
          {this.state.activeTab.key === "Settings" && <NewsPref fromtab={true} />}
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
