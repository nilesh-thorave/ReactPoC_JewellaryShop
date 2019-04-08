import request from 'requestretry';
import { defaultRequestBody , apiPaths} from '../constants/constats';

class Auth {
    constructor() {
        this.isLoggedIn = false;
        this.accessToken = "";
        this.apiPath = apiPaths.login;
        this.logOutApiPath = apiPaths.logout;
    }
    /**
     * @description - Login user to the server.
     * @param  {object} credenrtial- Object containing username and password
     * @returns { object} Promise - Promise resolves on successfull login else rejected.
     */
    login(credenrtial) {
        return new Promise((resolve, reject) => {
            const url = defaultRequestBody.url + this.apiPath;
            const body = {
                username: credenrtial.username,
                password: credenrtial.password
            };
            const requestBody = { ...defaultRequestBody, url, body};
            request.post(requestBody).then((response) => {
                // if Login is successfull(200) then retrun  success
                if (response.statusCode === 200) {
                    this.accessToken = response.body.access_token;
                    this.isLoggedIn = true;
                    resolve({
                        message: "You are now logged in.",
                        accessToken: response.body.id
                    });
                } else {
                    // if login is unsuccessfull because of invalid credentions, return login error
                    this.accessToken = "";
                    this.isLoggedIn = false;
                    reject({
                        message: "Login Failed"
                    });
                }
            }, error => {
                // if error encountered at the time of login.
                this.accessToken = "";
                this.isLoggedIn = false;
                reject({
                    "message : ": error.error.message
                })
            });
        });

    }

    /**
     * @description - Check if user is already authenticated or not
     * @returns{boolean} isLoggedIn
     */
    isAuthenticated() {
        return this.isLoggedIn;
    }

    /**
     * @description - Method to get access token returned after login
     * @returns accessToken { string } - Access token recieved from authentication server
     */
    getAccessToken() {
        return this.accessToken;
    }

    logout(accessToken){
        return new Promise((resolve, reject) => {
            const url = defaultRequestBody.url + this.logOutApiPath + accessToken;
            const requestBody = { ...defaultRequestBody, url};
            request.post(requestBody).then((response) => {
                // if Logout is successfull(204) then retrun  success
                if (response.statusCode === 204) {
                    this.accessToken = null;
                    this.isLoggedIn = false;
                    resolve({
                        message: "You are now logged out successfully."
                    });
                } else {
                    // if login is unsuccessfull because of invalid credentions, return login error
                    this.accessToken = null;
                    this.isLoggedIn = false;
                    resolve({
                        message: "You are already logged out."
                    });
                }
            }, error => {
                // if error encountered at the time of login.
                reject({
                    "message : ": error.error.message
                })
            });
        });

    }
}

export default new Auth();