// start with strings, numbers and booleans
/* -------copy by value--------- */

//Numbers
let num1 = 100;
let num2 = num1;
console.log(num1, num2); //outputs 100 100

num1 = 200;
console.log(num1, num2); //outputs 200 100

//Strings
let hi = 'hi!';
let hello = hi;
console.log(hi, hello); //outputs 'hi!' 'hi!'

hi = 'hello!';
console.log(hi, hello); //outputs 'hello!' 'hi!'

/* -------copy by reference--------- */

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players; //'team' is a reference to the original array 'players'
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Elie';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(team2, players);
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person; //copy by reference
captain.age = 70;
captain.number = 99;
console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {
    number: 99
});
// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const tj = {
    name: 'TJ',
    age: 30,
    social: {
        twitter: '@tjgillweb',
        instagram: '@tjgill08'
    }
};

const dev = Object.assign({}, tj);
dev.social.twitter = '@randomgirl';
console.log(tj.social.twitter, dev.social.twitter);

//const dev2 = JSON.parse(JSON.stringify(tj)); //not recommended. Poor man's way ;)