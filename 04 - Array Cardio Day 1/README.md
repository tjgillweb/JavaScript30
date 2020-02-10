# 04 - Array Cardio Day 1

**Challenge:** Given an array of objects called 'inventors', and another array 'people', perform the given tasks using array functions

**Things To Learn:** console.table(), and array methods filter(), map(), sort(), reduce().

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/04%20-%20Array%20Cardio%20Day%201/).

### Array.prototype.filter()

- The `filter()` method creates an array filled with all array elements that pass a test (provided as a callback function). 
- Internally, the `filter()` method iterates over each element of an array and pass each element to the callback() function.

```
const fifteens = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```

Another way to filter the list of inventors for those who were born in the 1500's deviced by me:
```
const fifteens = inventors.filter(inventor => (inventor.year).toString().substring(0, 2) == 15);
```

- **Tip:** Use `console.table()' method can be used instead of console.log() to display the results in a table format.

- **Note:** this method does not change the original array.

### Array.prototype.map()

- Map takes in an array, it does something with that array and then returns a new array but of the same length.
- You can think of map as sort of like a factory machine where it takes in a raw material and will stamp it somehow and then kick out that item on the other end.
- Unlike `filter()`, `map()` will always return the same amount of items as you give it.

```
const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
OR
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```
- **Tip:** Using the ES6 syntax, we don't need to use + for concatenation!

- **Note:** this method does not change the original array.

### Array.prototype.sort()

- The way the `sort()` works is that you get two items and you have these two items in your hand and you're asked to sort just those two items.
- So, you say, is person A older than person B? And if so, you put the older person on top. And the way that we do that is by returning 1 and -1. And that's going to bubble these items up and down in the array.

```
const ordered =  inventors.sort(function(a,b) {
  if(a.year > b.year) {
    return 1;
  }
  else{
    return -1;
  } 
});

OR

const ordered =  inventors.sort((a,b) => a.year > b.year ? 1 : -1);
```

### Array.prototype.reduce()

- The `reduce()` method reduces the array to a single value.
- The `reduce()` method executes a provided function for each value of the array (from left-to-right).
- The return value of the function is stored in an accumulator (result/total).

```
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
```





