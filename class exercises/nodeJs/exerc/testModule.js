function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
// arrow function
let addition = (num1, num2) => {
        return 'Addition result:' + (num1 + num2);
    }
    // variable
let myCompany = 'DCI';
// object
let person = {
        id: 1212,
        name: 'Peter',
        country: 'Ireland'
    }
    // an Array
let friends = [
        'Jessica',
        'Cagri',
        'daniel'
    ]
    // module.exports.name = getFullName;
    // module.exports.add = addition;
module.exports = {
    name: getFullName,
    add: addition,
    myCompany,
    person,
    friends
}