import React, { Component } from "react";
var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    AsyncStorage,
    ScrollView,
    Image,
    Linking,
    TouchableOpacity
} = require("react-native");
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import * as Actions from "../actions";

class News extends Component {
    state = {
        news: ""
    };

    componentWillMount = () => {
        let first = this.props.news;
        let tiles = first.map((temp, index) => {
            return (
                <View key={index}>
                    <Text style={styles.header}>
                        {this.props.newsCat[index].toUpperCase()}
                    </Text>
                    {temp.map(name => {
                        let url = name.urlToImage + "";
                        if (url == "null") {
                            url =
                                "http://pluspng.com/img-png/newspaper-png-cover-art-300.png";
                        }
                        return (
                            <TouchableOpacity
                                key={name.publishedAt}
                                onPress={() => Linking.openURL(name.url)}
                            >
                                <View
                                    key={name.publishedAt}
                                    style={styles.container}
                                >
                                    <View style={styles.containerImage}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={{ uri: url }}
                                        />
                                    </View>
                                    <View style={styles.containerText}>
                                        <View style={styles.containerTexts}>
                                            <Text style={styles.text}>
                                                {name.title}
                                            </Text>
                                        </View>
                                        <Text style={styles.source}>
                                            {name.source.name}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            );
        });
        this.setState({ news: tiles });
    };

    render() {
        return <ScrollView>{this.state.news}</ScrollView>;
    }
}

function mapStateToProps(state, props) {
    return {
        userProfile: state.dataReducer.userProfile,
        news: state.dataReducer.news
    };
}

export default connect(
    mapStateToProps,
    {
        getNews: Actions.getNews
    }
)(News);

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: "row",
        flex: 1,
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
    containerImage: {
        flex: 1,
        maxHeight: 100,
        maxWidth: 110
    },
    containerText: {
        flexWrap: "wrap",
        flex: 1,
        padding: 2,
        overflow: "visible",
        maxHeight: 120,
        width: "100%",
        alignItems: "flex-start"
    },
    containerTexts: {
        flexWrap: "wrap",
        flex: 1,
        padding: 2,
        overflow: "hidden",
        maxHeight: 80,
        width: "100%",
        alignItems: "flex-start"
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    source: {
        bottom: -10,
        color: "#333",
        padding: 2
    },
    text: {
        textAlign: "justify",
        color: "#333",
        padding: 2,
        fontWeight: "900",
        fontSize: 14
    }
});
