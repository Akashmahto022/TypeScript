"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
function signupUser(email, password, isPaid) {
}
var loginUser = function (email, password, isPaid) {
};
loginUser("one@gmail.com", "jhgfds", false);
signupUser("kabca", "12345", true);
getUpper("akash mahto");
addTwo(10);
function getValue(value) {
    if (value > 5) {
        return true;
    }
    return '200';
}
var getHello = function (str) {
    return "hello";
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 1
});
function logError(errmessage) {
    console.log(errmessage);
}
function handleError(errmessage) {
    throw new Error(errmessage);
    // console.log(errmessage)
}
