import feedbackService from '../../services/feedback'
export const submitFeedback = (feedback) => {
    return (dispatch, getState)=>{
        feedbackService.submitFeedback(feedback)
            .then((response)=>{
                dispatch({
                    type: "SUBMIT_FEEDBACK",
                    response
                })
            }).catch(error=>{
                dispatch({
                    type: "SUBMIT_FEEDBACK_ERROR",
                    error
                });
            })
    }
}