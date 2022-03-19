import {LOGIN,LOGOUT} from '../actionTypes.js'
import { InitailUserState } from '../reducers/supplierReducer.js';

// LOGIN: Set User Data we get from wallets
export const logIn = (userData) => async (dispatch) =>{
    try {
        dispatch({
            type: LOGIN,
            payload: {
                username: userData.username,
                publicAddress: userData.publicAddress,
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}


// LOGOUT: clear User Data we get from wallets
export const logOut = () => (dispatch) =>
  dispatch({
    type:LOGOUT,
    payload: {
        ...InitailUserState
    },
})

