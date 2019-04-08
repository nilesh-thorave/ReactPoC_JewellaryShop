import request from 'requestretry';

import { defaultRequestBody, apiPaths} from '../constants/constats';

class Feedback {
    apiPath = apiPaths.feedback;
    
    /**
     * @description - Method to submit user feedback to the server.
     * @param  {object} feedback - user feedback with user details.
     * @returns {object} Promise - resolves on successful submission to the server else reject.
     */
    submitFeedback(feedback) {
        return new Promise((resolve, reject) => {
            const url = defaultRequestBody.url + this.apiPath;
            const body = feedback;
            const requestBody = { ...defaultRequestBody, url, body};
            request.post(requestBody).then((response) => {
                if (response.statusCode === 200) {
                resolve(response.body);
                }
                else {
                    resolve({message : "Unable to submit your feedback please try later."});
                }
            }, error => reject({"message : ": error}));
        });
    }
}

export default new Feedback();