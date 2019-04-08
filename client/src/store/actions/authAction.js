import authService from '../../services/auth';
import userService from '../../services/user';
export const signIn = (credentials) => {
    return (dispatch)=>{
    authService.login(credentials)
        .then((response)=> dispatch({type: "LOGIN_SUCCESS", payload: response}))
        .catch((error)=> dispatch({type: "LOGIN_FAILURE", payload: error}))
    }
}

export const signOut = (credentials) => {
    return (dispatch)=>{
    authService.logout(credentials)
        .then((response)=> dispatch({type: "LOGOUT_SUCCESS", payload: response}))
        .catch((error)=> dispatch({type: "LOGOUT_FAILURE", payload: error}))
    }
}

export const signUp = (userDetails) => {
    return (dispatch)=>{
        userService.createUser(userDetails)
        .then((response)=> dispatch({type: "SIGNUP_SUCCESS", payload: response}))
        .catch((error)=> dispatch({type: "SIGNUP_FAILURE", payload: error}))
    }
}