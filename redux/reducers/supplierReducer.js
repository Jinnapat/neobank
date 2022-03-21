import {LOGIN,LOGOUT} from "../actionTypes"

// Initial user state
export const InitailUserState = {
    username: "",
    publicAddress: "",
}

const supplierReducer = (state = InitailUserState,{type,payload}) => {
    switch(type) {
        case LOGIN : 
            return {
                username: payload.username,
                publicAddress: payload.publicAddress,
            }
        case LOGOUT : 
            return {...InitailUserState}
        default :
            return state
    }
}

export default supplierReducer;

// {
//     username: payload.username,
//     walletAddress: payload.walletAddress,
//     balance:payload.balance,
//     network:payload.network,
//     profileImage: payload.profileImage,
//     description: payload.description,
//     socialNetworks: payload.socialNetworks,
// }