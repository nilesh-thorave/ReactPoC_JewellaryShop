import request from 'requestretry';

console.log("Location : ", window.location);
let baseUrl = "";
if (!window.location.origin) {
    baseUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
} else {
    baseUrl = window.location.origin
}
export const defaultRequestBody = {
    'url': baseUrl + '/api',
    json: true,
    maxAttempts: 5, // (default) try 5 times
    retryDelay: 5000, // (default) wait for 5s before trying again
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError // (default) retry on 5xx or network errors
}

export const apiPaths = {
    login: "/Users/login",
    logout: "/Users/logout?access_token=",
    feedback: "/feedbacks",
    product: "/products",
    user: "/Users"
}