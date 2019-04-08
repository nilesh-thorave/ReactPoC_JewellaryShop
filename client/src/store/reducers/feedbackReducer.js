const initstate = {
    submitted: false
}

const feedbackReducer = (state=initstate, action) =>{
    switch(action.type){
        case "SUBMIT_FEEDBACK":
            return {submitted: true};
        
        case "SUBMIT_FEEDBACK_ERROR":
            return { submitted: false};

        default:
            return state;
    }
}

export default feedbackReducer;