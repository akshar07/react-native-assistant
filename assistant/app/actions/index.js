import axios from 'axios';

const data = [1,2,3,4,5]
export function getData(){
    return (dispatch) => {
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            dispatch({type: 'DATA_AVAILABLE', data:data});
        }, 1000);
 
    };
}

export function changeData(){
    return (dispatch) => {
        data.push(7)
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            dispatch({type: 'DATA_AVAILABLE', data:data});
        }, 2000);
 
    };
}


export function saveProfile(user){
    console.log(user);
    return (dispatch)=>{
        axios.post('https://morning-beyond-27964.herokuapp.com/api/saveUser', {
            User: user
        })
        .then(function (response) { 
            return dispatch({
                type:'SAVE_USER_PROFILE',
                data:user
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    
}

export function getUserProfile(userId){
    return (dispatch)=>{
        axios.get('https://morning-beyond-27964.herokuapp.com/api/getuser?userId='+userId)
        .then(function (response) { 
            return dispatch({
                type:'GET_USER_PROFILE',
                data:response.data,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
}