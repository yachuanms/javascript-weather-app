//console.log(`Hello`);
//console.log(`Love`);


//window.alert(`This is an alert`);
//window.alert(`Pizza`);

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza.`;

//==============================================

//variable

//1. declaration   let x;
//2. assignment    x = 100;

//let age = 25;

//console.log(`You are ${age} years old.`);
//console.log(typeof age);

//let firstName = "John";

//document.getElementById("myH1").textContent = `Hello, ${firstName}`;

//==============================================

//accept user input
//1. window prompt
//let username;

//username = window.prompt("What's your username?");
//console.log(username);

//2. HTML textbox
/*
let username;
document.getElementById("mySubmit").onclick = function(){
    username  = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
*/

//==============================================

/*
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//==============================================

*/

//spread operator = ... 
//allows an iterable such as an array or string to be expended into seperate elements (unpack)
/*
let nums = [1, 2, 3, 4, 5];

console.log(Math.max(nums)) //NaN
console.log(Math.max(...nums))//5
*/


//rest parameters = (...rest)
//allow a function work with a variable number of arguments by
//bundling them into an array

/*

function fridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "sushi";
const food2 = "ramen";

fridge(food1, food2, food3);
//['pizza', 'sushi', 'ramen']


*/


//==============================================

//callback
//a function that is passed as an argument to another function
//used to handle asynchronous operations
//1. Reading a file
//2. Network requests
//3. Interacting with databases

/*
hello(goodbye);
//using callback function without () !

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}
*/

//================================================

//forEach() = method used to iterate over the elements of an array
// and apply a specified function (callback) to each element

//array.forEach(callback)
//element, index, array are provided

/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element*2;
}

function display(element, index, array){
    console.log(element);
}

//2
//4
//6
//8
//10

 */

//=====================================================

//.map() = accepts a callback and applies that function to each element of an array, then return a new array
//diff with forEach()
//after return, we still have the original array

/*
const num = [1, 2, 3, 4, 5];
const squares = num.map(square);

console.log(squares);
console.log(num);

function square(element){
    return Math.pow(element, 2);
}
*/


//=====================================================

//.filter()

/*
const ages = [16, 17 ,18, 86, 25];
const adults = ages.map(isAdult);
console.log(adults);//[false, false, true, true, true]
const adults1 = ages.filter(isAdult);
console.log(adults1);//[18, 86, 25]

function isAdult(element){
    return element >= 18;
}

*/
//=====================================================

//.reduce()  = reduce the elements of an array to a single value

/*
const prices = [5, 30, 10, 17, 28, 90];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);//$180

function sum(accumulator, element){
    return accumulator+element;
}
*/

//=========================================================

//function expressions = a way to define functions as values or variables

/*
setTimeout(function(){
        console.log("Hello!");
    }, 3000);

*/

//======================================================

//arrow functions = a concise way to write function expressions 
// good to simple functions that you use only once
// (parameters) => some code

//setTimeout( () => console.log("Hello"), 3000);

/*
const nums = [1, 2, 3, 4];
const squares = nums.map((element)=>Math.pow(element, 2));

console.log(squares);
*/

//========================================================

//static = defines properties or methods that belong to a class itself rather than the objects created from the class

//class owns anything static, not class

/*
class MathUtil{
    static PI = 3.14159;
}
//no need to const math1 = new MathUtil;
console.log(MathUtil.PI);
*/

//========================================================

//super = keyword used in classes to call the constructor or access the properties and methods of a parent
//this -> this objecy
//super -> the parent

/*
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 20);

console.log(rabbit.name);

fish.swim();
*/ 

//==============================================================

 //closure = a function defined inside of another dunction.
 // the inner function has access to the variables and scope of the outer function.
 // allow for private variables and state maintenance
 // used frequently in React, Vue, Angular 

/*
 function outer(){

    let message = "hello";

    function inner(){
        console.log(message);
    }

    inner();

}

message = "Goodbye";

outer(); //hello

function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

*/

//====================================================================

//setTimeout = execution time may very based on the workload of the JS runtime env

//setTimeout(callback, delay)
//clearTimeout(timeoutId)

/*
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}
*/

//====================================================

//asynchronous = allows multiple operations to be performed concurrently without waiting 
//Handled with: Callbacks, Promises, Async/Await

// Error
//try{} if(){throw new Error("Error msg")}
//catch(error){ console.error(error);}
//finally{} (optional) Always executes. [close files, connections, release resources]

//===========================================================

//DOM = DOCUMENT OBJECT MODEL
// object{} represents the page you see in the web browser
// and provides you with an API to interact with it

/*
const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;
*/

//=================================================================

//element selectors = methods used to target and manipulate HTML elements
//allow you to select one or multiple HTML elements from the DOM

//document.getElementById() //element or NULL
//document.getElementsClassName() //HTML collection
//document.getElementsByTagName() //HTML collection
//document.querySelector() //First element or NULL
//document.querySelectorAll() //NODELIST

//===================================================================

//eventListener = listen for specific events to create interactive web pages events
// click, mouseover, mouseout
//.addEventListener(event, callback);

//NodeList = static collections of HTML elements by (id, class, element)
// can be created by using querySelectorAll()
// similar to an array, but no (map, filiter, reduce)
// won't update to automatically reflect changes

//classList = element property in JS used to interact with an element's list of classes(CSS classes)
//allow you to make reusable classes for many elements across your webpage

//=================================================================

//callback hell = situation in JavaScript where callbackes are nested within other callbackes to the degree where the code is difficult to read
// use Promises + async/await to avoid Callback Hell

//Promises = an object that manages asynchronous operations.
// wrap a promise object around (asynchronous code)
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject)=>{asynchronous code})

/*
function walkDog(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const walkedDog = true;
            if(walkedDog){
                resolve("You walk the dog 🦮");
            } else{
                reject("You didn't walk the dog.");
            }
            
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }else{
                reject("You didn't take out the trash");
            }

            
        }, 1500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const trashTakenOut = false;

            if(trashTakenOut){
                resolve("You take out the trash 🗑️");
            }else{
                reject("You didn't take out the trash");
            }
            
        }, 1500);
    });
}

walkDog().then(value=> {console.log(value); return cleanKitchen()})
         .then(value=> {console.log(value); return takeOutTrash()})
         .then(value=> {console.log(value); console.log("You finished all the chores.")})
         .catch(error=> console.log(error));

*/

//=========================================================================================

//Async/Await
// Async = makes a function return a promise
// Await = makes an async function wait for a promise

//allows you write asynchronous code in a synchronous manner
//async doesn't have resolve or reject parameters
//everything after await is placed in an event queue

/*
function walkDog(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const walkedDog = true;
            if(walkedDog){
                resolve("You walk the dog 🦮");
            } else{
                reject("You didn't walk the dog.");
            }
            
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }else{
                reject("You didn't take out the trash");
            }

            
        }, 1500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const trashTakenOut = false;

            if(trashTakenOut){
                resolve("You take out the trash 🗑️");
            }else{
                reject("You didn't take out the trash");
            }
            
        }, 1500);
    });
}


async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

    }catch(error){
        console.error(error);
    }

    

}

doChores();
*/

//=================================================================================

//JSON = (JavaScript Object Notation) data-interchange format
// used for exchanging data between a server and a web application
// JSON file {key: value} OR [value1, value2, value3]

//JSON.stringify() = converts a JS object to a JSON string.
//JSON.parse() = converts a JSON string to a JS object

/*
const names = ["Daisy", "John", "Reed", "Sandy"]
const jsonPerson = `{"name": "Sandy", "age":27, "isEmployed": true}`;

const jsonString = JSON.stringify(names);
console.log(names);
console.log(jsonString);

const parseData = JSON.parse(jsonPerson);
console.log(parseData);
*/

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))



















