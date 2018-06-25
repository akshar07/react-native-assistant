import React, { Component } from "react";
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Linking
} = require("react-native");
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import * as Actions from "../actions";
import { WeatherWidget } from "react-native-weather";
import data from "./data.json";

class HomeTab extends Component {
    state = {
        trends: ""
    };
    componentWillMount = () => {};

    compare = (a, b) => {
        if (a.tweet_volume > b.tweet_volume) return -1;
        if (a.tweet_volume < b.tweet_volume) return 1;
        return 0;
    };

    render() {
        let temp = data[0].trends;
        temp.sort(this.compare);
        let count = 0;

        let buttons = temp.map(name => {
            count++;
            if (count <= 10) {
                return (
                    <TouchableHighlight
                        style={styles.buttons}
                        key={name["name"]}
                        onPress={() => Linking.openURL(name.url)}
                    >
                        <Text style={styles.textColor}>{name["name"]}</Text>
                    </TouchableHighlight>
                );
            }
        });
        return (
            <View style={styles.body}>
                <TodoList />
                <View style={styles.weather}>
                    <WeatherWidget
                        api={"db8db5734ecd596de552d5eb50eac8a6"}
                        lat={"37.3537"}
                        lng={"-122.0307"}
                    />
                    <ScrollView>
                        <View style={styles.trending}>
                            <Text style={styles.header}>
                                Trending topics on Twitter
                            </Text>
                            {buttons}
                        </View>
                    </ScrollView>
                </View>
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
)(HomeTab);

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4cc0e9",
        padding: 10,
        paddingTop: 20,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 2
    },
    body: {
        backgroundColor: "#fafafa",
        height: "100%"
    },
    trending: {
        marginTop: 10,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#FFF",
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderWidth: 1,
        borderRadius: 10,
        flexWrap: "wrap",
        alignItems: "flex-start"
    },
    list: {
        width: "100%",
        height: "10%"
    },
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
    },
    hr: {
        height: 2,
        backgroundColor: "gray"
    },
    weather: {
        margin: 20,
    },
    listItemCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "gray",
        borderRadius: 10,
        borderWidth: 2,
        width: "100%"
    },
    buttons: {
        margin: 10,
        marginLeft: 0,
        padding: 10,
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
    header: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
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
