---
title: Introductory Notes on Javascript
description: Introductory notes on Javascript
---

{% section .hero %}

# Introductory Notes on Javascript

## Some Basics
- JS is a dynamic, weakly typed language
- It is compiled at runtime
- Was made to be able to change the content from within the browser without the server
- Code is parsed by the javascript engine(V8 , spidermonkey etc) in to machine code, where it can be executed.
- Execution is done on a single thread
- Compiles on the fly
- Code can change on runtime
- data types are assumed - var - does not care about strong data type definitions

## Variables, data types, operators & functions
**Variables** are a data containers - not primitives

```jsx
let userName = 'Neil';
```

**Constants** can be made for data containers that cannot change

```jsx
const allNames = 'Names';
```

**Operators** - usual - expoenent operator

```jsx
let number = 20;
number = number/30;
number = number**number;
```

**Variable usage in string**

Using back quotes and the ${} syntax you can easily output the variable in the string

```jsx
let stringOutput = `(${number} + 10) * 3`
```

**Functions**

normal functions - you dont have to use params, you dont have to always return values

```jsx
function MyFunction(parameter){
		alert("Hello");
		let sendBack = 199;
		return sendBack;
}

const newNum = MyFunction(20); // assign a function to a constant
```

- In javascript function ordering does not matter in the same way that variable declarations matter.
- The javascript engine runs through the code first, and then registers all fuctions at the top.

**Shadowed variables**

Global scope and local scope(in a function) variables can have the same name. 

**Functions in functions**

There is often scenarios where you need to execute a function from another. But you may not want it to trigger right away. 

```jsx
function add(num1, num2){
return num1+num2;
}
addBtn.addEventListner("click", add);
//**We add just the name of the function if we only want it to execute on the event
//That its parent function is called.**
```

**Data type conversions**

Because javascript makes no variable type assumptions it is important to keep track of what the browser thinks each value is. 

```jsx
currentResult = currentResult + userInput.value; //concactinates the value with a string

currentResult = currentResult + parseInt(userInput.value); // parses to int

**currentResult = currentResult + +userInput.value;** // + + two pluses, short form for parsing
```

**Arrays**

```jsx
let values = [];

values.push();//pushes a value on to the array

console.log(values[0]);//grabs the first value as usual

```

**Objects**

Javascript object notation JSON

```jsx
let values = [];
const myObject = {
		number: 1, //key value pairs
		name: 'neil', 
		age: 22, 
};
values.push(myObject.number); //access to the object number and push to array
```

**Other data types**

- *Undefined*: means that no data has been added
- *Null*: no data, never assumed, is only ever set to null
- *NaN*: not a number (5+ "hello" = NaN)

**Typeof**

```jsx
typeof "Neil" // => returns string
typeof 4555 //=> number
typeof true // => Boolean
typeof [1, 2, 3] // => Object
typeof null // => object

```

**importing scripts with html** 

```jsx
<script src="assets/scripts/vendor.js" defer></scripts>
//defer waits until after the html is downloaded to start executing.

<script src="assets/scripts/vendor.js" async></scripts>
// async does not wait until the html is parsed. executes once downloaded. 
```

## Control Structures
Boolean operators

```jsx
value equality       **==**

value inequality     **!=**

value and type equality **===**

value and type inequality **!==**

greater than         **>**

Less than           **<**

not true        **!var**
```

**if/else**

```jsx
if(value1 > value2){
//do something
}else if {
//do something different
}else
//other thing
```

And/Or 

```jsx
&& //AND

|| // OR
```

**Falsy and Truthy** 

When Javascript expects a boolean, it tries to turn all variables in to that.

```jsx
const myValue = 0;

if(myValue){
//do something
}
//Above, will evaluate the boolean to be false as 0 is a false. 1 is true.
```

Empty String = false

String  = true

All objects and arrays = true

Null, undefined & NaN = false

### **Ternary operators**

```jsx
const userName = isLogin ? 'Neil' : null;

//isLogin is the condition
//'Neil' is the string stored in userName, if condition is met 
//null is stored when condition is false
```

### **Shorthands**

*Real Boolean coercian*: place a       **!!**     infront of a truthy/falsy interpreation to convert to a real boolean 

*Default value assignment with OR*

```jsx
const name = someInput || 'Neil';
//the value will either be equal to the variable, or to the string if the variable is empty
```

*Value assignment if true with AND*

```jsx
const name = isValidName && 'Neil';
```

### **Switch Statement**

```jsx
switch(event){
	case LOG_EVENT_ONE: //if case is met
	logEntry.target  ='something'; //do this
	break;//then break

	//breaks can be used for falthrough 

	case LOG_EVENT_TWO: //if this one is met
	logEntry.target = 'something two';//do this
	break;//then break
}
```

## **Loops**

### *For loop*

```jsx
for(let i = 0; i<3; i++){
console.log("something" + i);
}
```

### *For-Of Loop*

This is only availaible for arrays and strings(which are char arrays)

```jsx
for(const el of array){ //JS creates a new const for each iteration
console.log(el);
}
```

### *For-in loop*

```jsx
for(const key in obj){
console.log(key);
console.log(obj[key]);//used when accesing the value of the key
}
```

### *While loop*

```jsx
while(isLoggedIn){
console.log("something");
}
```

### Do-While Loop

```jsx
do{
	console.log("something");
}while(j<3);
```

### For Loop continue

```jsx
for(int i=0; i<10; i++){
		if(i==2){
			continue    //skips on to next iteration
		}
	
		if(i==5){
			break      //breaks the loop off
				}
}
```

### Labelled statements

```jsx
outerLoop: for(int i=0; i<10; i++){
	innerLoop: for(int j=0; j<10; j++){
		if(j==3) break outerLoop;//allows you to break out of multiple loops to where you want to be.
}
}
```

### Error Handling

```jsx
if(isNaN(someValue) || otherValue<3){
	throw {message: "Error 515151"}
}
```

```jsx
let otherValue = 100;
let someValue;
try {
		somevalue = someAssigner();
}catch(error){
	console.log(error);
	someValue = 55;
	throw error;
}finally{//finally must have try, does not need catch
	someValue = otherValue;//always executes, regrdless of errors
}
```
## ES6 
- ECMAScript is the language that is standardised that JS runs on.

```jsx
var neil = "neil"; //var has existed since the start of ES

let neil = "neil"; // let has been available since ES6
```

- var only knows function and global scope
- let uses **block scope**

### *Block scope*

```jsx
if(name === "neil"){
		let variable = "shevlin";
		var nonBlockVariable = "shevlin";
}

console.log(variable);//THIS WILL NOT WORK 
console.log(nonBlockVariable);//This will work
```

If you use **let or const** inside a curly brace, you will only have access to it in that scope. eg if, for loops. 

### Hoisiting

```jsx
//var name;

console.log(name);

var name = "neil";//name = "neil";
```

hoisting pulls the var declaration up to the top, but does not initialise it. 

With let it does the same but does not initiliase it to undefined. leaving you with an error

**strict mode**

```jsx
name = "neil"; //this is valid syntax.however it is bad coding

//ES5 enabled strict mode, which prevents the above. 
"use strict"; // this will enable srict mode. 
```

### JS Engine parsing and compiling

- When the browser comes accross <script> in html, the browser will execute it.
- The Javascript engine in the browser has
    - An interpreter
    - A compiler(JiT)
- The interpeter takes the script and translates it to a byte level language.
- This interpreted code is handed off to the compiler, which optimises the code.
- Scripts will not be run again unless there is some new code to be compiled.
- Browser has several API's which are included in the browser. These can be used in Javascript. The compiler knows then where to find these functions, given through the API.

### Code execution in Javascript

JS engine has a 

**Heap**

- Stores data in the system memory
- manages the access permission to the system memory
- Functions for example will be stored in the heap, for the lifetime of the program.

**Stack**

- When a function is taken from memory, it is popped on to the stack.
- The JS engine continues to pop data allocations of function on to the stack.
- When data is no longer needed on the stack, it is popped off the stack.
- LIFO stack structure. Last in is the first off.

Javascript is single threaded. 

- Only a single read from the heap happens at a time.
- This ensures the execution of the code happens in order.

The browser has an event loop, which communicates with the JS engine. It does not acces the stack. 

Communicates with the engine, wacthing for changes in the code. 

### Primitives and references

Primitives - Strings, numbers, Booleans, null, undefined, Symbol

- stored in memory
- Inexpensive to create.

```jsx
let s1 = 50;

let s2 = s1;

s1 = 100;

console.log(s1 + " " + s2);
//output is 100, 50
//primitives just have a new instance created for them, rather than a reference
//this is because they are small.

```

*reference types - objects*

```jsx
let obj1 = {name: "neil"};

let obj2 = obj1; //obj1 === obj2 

obj1.name = "john";

console.log(obj1.name+ " " + obj2.name};
//outputs will be john john
**//HOWEVER** 

let obj3 = {name: "Billy"};

let obj4 = {...obj3};//triple ... operator creates a brand new object in memory
//this is instead of a reference. 
obj1.name = "john";

console.log(obj3.name+ " " + obj4.name};
//output is now john Billy
```

### Garbage collection and Memory management

- Garbage collection will happen when something is made redundant, not being used.
- memory leaks, occur when you make reference to an oject that doesnt exist anymore.

```jsx
function print(){
	console.log("something");
}

function addListner(){
	clickableBtn.addEventListner('click', function(){//this anonymous function is 
//a cause of memory leakage. 
			console.log("something");
//it creates a brand new object function everytime that the function is called. 
	}
}
//this can be solved by having a named function. 
function addListner(){
	clickableBtn.addEventListner('click', print);
//Js knows that this is the same object and so does not create a new instance. 
}
addListnerBtn.addEventListner('click', addListner);

```
## Functions
- parameters are variables passed in to a function.
- arguments are definite values.

```jsx
function isParameter(name){}

function isArgument("yes"){}
```

- Methods are functions, stored in objects

*Because functions are objects, we can store them in variables.* 

```jsx
function hello(){}//valid

const name = function hello(){}//valid

btn.addEventListner("click", name);//we use the const name, not the function name

const newName = function(){} //An anonymous function assigned to a variable. 
```

**Declared functions -** These are hoisted and intialised

```jsx
function isSomething(){

}//can use the function before it's defined
```

**Expressed functions -** These are hoisted but **not initialised**

```jsx
const name = function(){

}//bassically cannot use the function before it's defined. 
```

## Arrays
Accessing an array

```jsx
let a = ['first', 'second'];//declare an array
let first = a[0]; //Access the first in index in an array
```

**Iterating over an an array**

```jsx
let a = ['first', 'second'];

a.forEach(function(e, i, array){
	// 'i' is the index
  // 'e' is the element
	//This will do the same action over the entire array
console.log('memes'); //memes will be logged twice.
}
```

**Appending & removing**

```jsx
let a = ['first', 'second']; 
a.push('third'); // pushes another string in to the array
a.pop(); //pops off the first element in the array
//You can also assign that to a value

```

{% /section %}
