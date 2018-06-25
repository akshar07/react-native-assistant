import axios from "axios";

const data = [1, 2, 3, 4, 5];
export function getData() {
    return dispatch => {
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            dispatch({ type: "DATA_AVAILABLE", data: data });
        }, 1000);
    };
}

export function changeData() {
    return dispatch => {
        data.push(7);
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            dispatch({ type: "DATA_AVAILABLE", data: data });
        }, 2000);
    };
}

export function saveProfile(user) {
    console.log(user);
    return dispatch => {
        axios
            .post("https://morning-beyond-27964.herokuapp.com/api/saveUser", {
                User: user
            })
            .then(function(response) {
                return dispatch({
                    type: "SAVE_USER_PROFILE",
                    data: user
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}

export function getUserProfile(userId) {
    return dispatch => {
        axios
            .get(
                "https://morning-beyond-27964.herokuapp.com/api/getuser?userId=" +
                    userId
            )
            .then(function(response) {
                return dispatch({
                    type: "SAVE_USER_PROFILE",
                    data: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}

export function saveNewsPref(userId, newsPref) {
    return dispatch => {
        axios
            .post(
                "https://morning-beyond-27964.herokuapp.com/api/saveNewsPref",
                {
                    userId: userId,
                    newsPref: newsPref
                }
            )
            .then(function(response) {
                //console.log(response);
                return dispatch({
                    type: "SAVE_USER_PROFILE",
                    data: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}

export function getNews(newsPref) {
    let news = [];
    //console.log(newsPref);
    return dispatch => {
        for (let i = 0; i < newsPref.length; i++) {
            axios
                .get(
                    "https://newsapi.org/v2/top-headlines?country=us&category=" +
                        newsPref[i] +
                        "&apiKey=b3142eb925a04b3fa19f8b0af442e065"
                )
                .then(function(response) {
                    news.push(response.data.articles);
                    if (i + 1 === newsPref.length) {
                        //console.log(news);
                        return dispatch({
                            type: "SAVE_NEWS",
                            data: news
                        });
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    };
}

export function searchNews(search) {
    console.log(search);
    return dispatch => {
        axios
            .get(
                "https://newsapi.org/v2/everything?q=" +
                    search +
                    "&sortBy=publishedAt&apiKey=b3142eb925a04b3fa19f8b0af442e065"
            )
            .then(function(response) {
                console.log(response)
                return dispatch({
                    type: "SAVE_SEARCH_NEWS",
                    data: response.data.articles
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}
