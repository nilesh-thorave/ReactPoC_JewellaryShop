import request from 'requestretry';

import { defaultRequestBody, apiPaths} from '../constants/constats';
class User{
    constructor(){
        this.apiPath = apiPaths.user;
    }
    /**
     * @description - Method to create new user.
     * @param  {object} user - User detaials
     * @returns {object} Promise - Resolves on successful creation of user or else rejcted.
     */
    createUser(user) {
        return new Promise((resolve, reject) => {
            const url = defaultRequestBody.url + this.apiPath;
            const body = {
                username: user.username,
                password: user.password,
                email: user.email
            };
            const requestBody = { ...defaultRequestBody, url, body};
            request.post(requestBody).then((response) => {
                // if status code is 200, then resolve else reject.
                if (response.statusCode === 200) {
                    resolve({
                        message: "User created successfully."
                    });
                } else if (response.statusCode === 422) {
                    reject({
                        message: "Duplicate User details. Please provide correct details."
                    });
                } else {
                    reject({
                        message: "Failed: Unable to create user."
                    });
                }
            }, error => {
                // Reject if erro occuered while creating user.
                this.accessToken = "";
                this.isLoggedIn = false;
                reject({
                    "message": error.error.message
                })
            });
        });

    }
}

export default new User();
