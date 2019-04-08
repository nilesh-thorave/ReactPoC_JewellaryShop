const initstate = {
    authError: null,
    loginDetails: null,
    loggedIn: false,
    signUpDetals: null
}

const authReducer = (state=initstate, action) =>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return { ...state, authError: null, loginDetails: action.payload, loggedIn: true};
        
        case "LOGIN_FAILURE":
            return { ...state, authError: action.payload, loginDetails: null, loggedIn: false, signUpDetals: null};

        case "LOGOUT_SUCCESS":
            return { ...state, authError: null, loginDetails: null, loggedIn: false, signUpDetals: null};
        
        case "LOGOUT_FAILURE":
            return { ...state, authError: action.payload, loginDetails: null, loggedIn: false, signUpDetals: null};
        
        case "SIGNUP_SUCCESS":
            return { ...state, authError: null, signUpDetals: action.payload};
        
        case "SIGNUP_FAILURE":
            return { ...state, authError: action.payload, signUpDetals: null};

        default:
            return state;
    }
}

export default authReducer;