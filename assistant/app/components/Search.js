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
    TouchableOpacity,
    TouchableHighlight,
    TextInput
} = require("react-native");
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import * as Actions from "../actions";

class Search extends Component {
    state = {
        news: "",
        text: ""
    };

    changeText = text => {
        this.setState({ text: text });
    };

    getNews = () => {
        console.log(this.state.text);
        let temp = this.state.text;
        this.props.searchNews(temp);
    };

    render() {
        let tiles;
        if (this.props.searchNewss) {
            let first = this.props.searchNewss;//.data.articles;
            tiles = first.map((name, index) => {
                console.log(name)
                let url = name.urlToImage + "";
                if (url == "null") {
                    url =
                        "http://pluspng.com/img-png/newspaper-png-cover-art-300.png";
                }
                return (
                    <TouchableOpacity
                        key={name.title}
                        onPress={() => Linking.openURL(name.url)}
                    >
                        <View key={name.title} style={styles.containers}>
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
            });
            console.log(tiles);
        }
        return (
            <View>
                <View>
                    <TextInput
                        style={{
                            height: 30,
                            margin: 20,
                            borderRadius: 10,
                            borderColor: "gray",
                            borderWidth: 1
                        }}
                        placeholder="Type Search key word here"
                        onChangeText={text => this.changeText(text)}
                        value={this.state.text}
                    />
                    <TouchableHighlight
                        style={styles.buttons}
                        key={"submit"}
                        onPress={this.getNews}
                    >
                        <Text style={styles.textColor}>Submit</Text>
                    </TouchableHighlight>
                </View>

                {this.props.searchNewss && <ScrollView>{tiles}</ScrollView>}
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        userProfile: state.dataReducer.userProfile,
        news: state.dataReducer.news,
        searchNewss: state.dataReducer.searchNews
    };
}

export default connect(
    mapStateToProps,
    {
        searchNews: Actions.searchNews
    }
)(Search);

const styles = StyleSheet.create({
    container: {
        margin: 20,
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
    containers: {
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
    containerTexts: {
        flexWrap: "wrap",
        flex: 1,
        padding: 2,
        overflow: "hidden",
        maxHeight: 80,
        width: "100%",
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
        maxHeight: 100,
        width: 100,
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
        fontSize: 14,
        overflow:"hidden",
    },
    buttons: {
        margin: 20,
        left: "25%",
        padding: 10,
        width: "40%",
        borderRadius: 15,
        backgroundColor: "#5fd3a1"
    },
    textColor: {
        color: "white",
        textAlign: "center",
        fontWeight: "800"
    },
    containerText: {
        flexWrap: "wrap",
        flex: 1,
        padding: 2,
        overflow: "visible",
        maxHeight: 100,
        width: 100,
        alignItems: "flex-start"
    }
});
