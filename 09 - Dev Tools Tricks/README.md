# 09 - 14 Must Know Dev Tools Tricks

**Challenge:** Learn some Dev Tools and Tricks.

**Things To Learn:** Attributes Modification on an element and console tricks.

**Demo:**[here](https://tjgillweb.github.io/JavaScript30/09%20-%20Dev%20Tools%20Tricks/).

![](images/dev-tools-screenshot.png)

So, lets begin!

### 1. Attributes Modification

- We use Attribute Modification option when we have some JavaScript running on the page and we want to know what is causing it. It allows us to make a break point to see what's going on the element.
- So, in the Inspector, select the element in the DOM and right click. Then select the option `Break on -> Attribute Modifications`
- Now when we click on the element on the page, it will pop a debugger command in. It's a break point for us and it will then pause.
- Exactly where it paused, it will show us the line of code that is causing that attribute.

![](images/dev-tools1-screenshot.png)

### Console.log Tricks

#### 1. Regular
`console.log('hello');`

#### 2. Interpolation
- We can also interpolate values into `console.log`, but we should prefer using ES6 back-ticks.

```Javascript
console.log('Hello I am %s', 'Taranjot');
const name = "TJ";
console.log(`Hello I am ${name}`); //ES6 template literal
```

- Other ways of interpolation
  - **%d: integer**
  ```Javascript 
  console.log("I am %d years old!", 25); // I am 25 years old!
  ```
  
  - **%f: float**
  ```Javascript 
  console.log("It's %f euros.", 23.5); // It's 23.5 euros.
  ```
  
  - **%o: object**
  ```Javascript 
  console.log("This is an object: %o", {firstName: 'Amber', lastName: 'Simpson', age: 20});
  ```
  
#### 3. Styled
```Javascript 
console.log('%c I am a Stylized Console.log', 'font-size:20px; background: pink;')
```

#### 4. Warning!
- It gives us a warning and will tell us the stack trace as to where it got called. 
```Javascript 
console.warn('OH NOO!!');
```

#### 5. Error
- It won't throw an error, it will just display an error in the console. And again, that will also give you a stack trace as to where that was.
```Javascript 
console.error('Shit');
```

#### 6. Info
```Javascript 
console.info('There are around 4 quadrillion quadrillion bacteria on Earth.');
```

#### 7. Testing
- We can use `console.assert` to check if things are true.
- We can test for something and if it is false, it will throw an error into the console. And if it is true, nothing will happen.
```Javascript 
console.assert(1 === 1, 'That is wrong!'); //This assertion is true, so it won't display anything on the console.
console.assert(1 === 2, 'That is wrong!'); //Assertion failed: That is wrong!
```
```Javascript 
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!'); //Assertion failed: That is wrong!
``` 

#### 7. Clearing
```Javascript 
console.clear();
```
