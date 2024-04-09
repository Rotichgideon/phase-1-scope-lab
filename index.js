// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer () {
    var bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer () {
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "kijanaa";

function changeLeastFavoriteCustomer () {
    return leastFavoriteCustomer = "we mzee!"
}

upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();