const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular

console.log('hello');

// Interpolated

console.log('Hello I am %s', 'Taranjot');
const name = "TJ";
console.log(`Hello I am ${name}`); //ES6 template literal

// Styled

console.log('%c I am a Stylized Console.log', 'font-size:20px; background: pink;')

// warning!

console.warn('OH NOO!!');

// Error :|

console.error('Shit');

// Info

console.info('There are around 4 quadrillion quadrillion bacteria on Earth.')

// Testing

console.assert(1 === 1, 'That is wrong!');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing

console.clear();

// Viewing DOM Elements

const paragraph = document.querySelector('p');
console.log(paragraph);
console.dir(paragraph);

// Grouping together

//use the dogs array of objects to demonstrate
dogs.forEach(dog => {
    console.group(`${dog.name}`); // or use console.groupCollapsed
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting

console.count('sun');
console.count('sun');
console.count('sun');
console.count('moon');
console.count('sun');
console.count('sun');
console.count('moon');
console.count('moon');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

//Console.table

console.table(dogs);