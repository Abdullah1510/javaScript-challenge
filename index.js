function func(name, fullName) {
    this.name = name;
    this.fullName = fullName;
    this.get = () => {
        return `hi abdullah ${this.fullName}`
    }
}

func.prototype.hi = function () {

}
// This is the function constructor in javaScript
// after introduncing es6 in class came into picture

let fun1 = new func('abd', "Abdullah Rahmin");
console.log(fun1.get());


// JavaScript coding challeneges

let task = {};



// Communication


// 10 common interview qusetion in javaScript
// 1. Find the frequency of elements in
// we can be explore these things
// explain the concept of debouncing and throatling



// Today we will be the start the coding JavaScript challenges question
//Interview prepparation
// node js , call back, promise async,await, await,closure,create node js server,Web API, Rest APIhow does work node.js behind the scene
// how to create the node js server
// call,bind ,apply in object
// let d = [[[]]]


// function SetIndex(){

// }


// var a = [1,2,3, [1,2, [1,2, [1,2] ] ] ];
// function flattening(arr) {
//     let array = [];

//     for(let i of arr ) {
//         if(Array.isArray(i)) {
//           let b = flattening(i);
//           array.push(...b)
//         }else{
//            array.push(i);
//         }
//     }
//     return array;
// }

// console.log(flattening(a));

// Today related object we will be complete thesee things
// Rest API, webAPI


// This is little bit tough  question in javaScript we have to be keep in mind in javaScript
//   swapCase('AaBbc')
// function swapCase(str) {
// }toLowerCase()

// DSA coding challenges in javaScript
// Problem Statement in javaScript

// Countinng the Duplicate characters i n String in  javaScript

// we have given one String
// lets define the string in javaScript


// This is a input string
// let str = "adsjfdsfsfjsdjfhacabcsbajda";


// output would be expected in javaScript coding chalellenges
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

// This is a one solution but inspit of two solution  We have

// before giving the coding interview we can learn do the coding practice
// const count_duplicate_characters = function(str) {

//     var arr = {}

//     for (let i = 0; i < str.length; i++) {

//         if (Object.keys(arr).includes(str[i])) {
//             arr[str[i]] = arr[str[i]] + 1
//             continue
//         }

//         arr[str[i]] = 1
//     }
//     return arr
// }
// console.log(count_duplicate_characters(str))


//React interview question


// removeduplicate string in javaScrpt
// function findUnique(str) {
//     return [...str].reduce((acc, curr) => {
//         return acc.includes(curr) ? acc : acc + curr;
//     }, "")
// }

// console.log(findUnique("Geeksforgeeks"))
// console.log(findUnique("Geeksforgeeks Is))



// how to get the number vowels in string


// longets non repeating characrter string in javaScript



// What is the difference between an instance property and a prototype property in JavaScript?
// Answer: An instance property is a property that is specific to a particular instance of an object.
//  When you create a new instance of an
// object, that instance will have its own copy of the instance properties.
// Any changes made to the instance property of one object do not affect the instance properties of other objects.



// There are two types of API function in <Node className="js"></Node>

// Asynchronous and non blocking
// second synchronous and blocking


// Asunchronous and non blocking function

// Interview question in progress bar

// Progress bar we will be complete one a good way to complete the things
//pagination is very important in react js interview question

// Rotation of array in javaScript by kth step
// Understanding of SSR ,CSR, ISR A comprehensive Guide to understand the basuc things

// WE should the map ,filter,reduce polyfill function in javaScript Each and everything I have understood the things, SSG


// This is very simple couter application in javaScrpt
// let counter = 0;
// for (var i = 1; i <= 10; i++) {
//     counter += i;
// }
// console.log(counter); 55 //sum of number fronm 1to 10
// console.log(i);//11
// console.log("abdullah Rahmani")
// let object = {
//     name: "Shyam",
//     greet() {
//         console.log(this.name)
//     }
// }
// object.greet();
// function handlerTimeOut() {
//     console.log("Abdulllah rahmanai is the best")
// }


// setTimeout(handlerTimeOut, 10000)
// setTimeout(object.greet, 1000)


// This is the polyfill for reduce function in javaScript


// This is a good implementation in javaScrpt  for machine coding interview round

// Array.prototype.myReduce = function(cb, initialValue){
//     let accumulator = initialValue;
//     for (let i = 0; i < array.length; i++) {
//         accumulator = accumulator ? cb(accumulator,this[i],i) : this[i]
//     }
//     return accumulator
// }

// arr.reduce((acc,el,i)=>{},0)

// Todo list practice
//

// SSR and CSR,

// Search functionality
// we will be complete this things


// Design a function which helps to do debouncing.
// Design a function which helps to do throttling

// This is very important concept in javaScript
// object.freeze();

// Generator function in es6


// what is the use of

// Infinite scrolling in react js
// Modular code readability in machine coding interview round

// one immage file 

var list = { "you": 100, "me": 75, "foo": 116, "bar": 15 };

let keysSorted = Object.keys(list).sort(function (a, b) { return list[a] - list[b] })

function multiPle() {
    let multiPle = [];
    for (let i in list) {
        multiPle.push([i, list[i]])
    }
    return multiPle
}

let sortted = multiPle(list).sort((a, b) => {
    return a[1] - b[1]
})


let obj = {}
sortted.forEach((a) => {
    let key = a[0];
    let value = a[1];
    obj[key] = value;
})
// console.log(obj);


// This is very simplest method to sorting rthe object  by using reduce the method

// sorting the key based on values by using the object.keys() inbuilt method then after the sort method
let sortedObject = Object.keys(list).sort((a, b) => {
    return list[a] - list[b]
})
    .reduce((a, el) => {
        return {
            ...a,
            [el]: list[el]
        }
    }, {})
console.log(sortedObject);



// This is very important question in ,achine coding round interview question
// Sorting Objects. Given an array of objects, sort the objects by population size. Return the entire object.
// let obj1 = {
// }
// for (let i in list) {
//     obj1[]
// }
// This is very important method  to compare two object

// _.isEqual(obj1,obj2)  it does deep comparison to check the value toi compare the two object when ordering is not same



// very simple qjuestion in javaScript like longest array in javaScript
// Longest String in an Array. Write a function that accepts an array of strings. Return the longest string.\

var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
];

function longestString(arr) {
    let longest = "";
    //  let longestString;
    arr.forEach((el) => {
        if (el.length > longest.length) {
            longest = el;
        }
    })
    console.log(longest)
}
// longestString(arr);


let LongestString = arr.reduce((a, b) => {
    return a.length > b.length ? a : b
}, '');
// console.log(LongestString)

class Person {
    constructor() {
        console.log("abdullah rahmani")
    }
    getData() {
        console.log("rahmani sahab")
    }
}
// console.log(Person.prototype.getData)
// let object = new Person();
// object.getData()

// Duplicate element in array in javaScript

let arr4 = [4, 5, 8, 9, 9, 6, 6, 7, 7];

let duplicate = arr4.filter((el, i) => {
    return arr4.indexOf(el) !== i
}).sort();

// console.log(duplicate);

// currying fucntion in machine codingh round

// I have some problem in infinite scrolling in react js

// What is the differnce between ES5 and ES6 in javaScript

// What does ES6 offer

// class keyword
// getter/setter syntax
// constructor function syntax
// extends keyword
// super keyword
// static keyword



const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]
const nameStudent = students.map(el => el.name);
// console.log(nameStudent)


const arrOfArrs = [
    ['aaron', 'ake', 'anna', 'aje'],
    ['becky', 'ben', 'bright'],
    ['cara', 'chris'],
    ['david', 'daniel', 'danielle', 'djenue'],
]
const flattened = arrOfArrs.reduce((acc, array) => acc.concat(array))
    // console.log(flattened)

    /

    // curring fucntion in javaScript


    // const sum =a =>b =>b ? sum(a+b):a


    function sumA(a) {
        return function (b) {
            if (b) {
                return sumA(a + b);
            }
            return a;
        }
    }
// console.log("hi")
// console.log(sumA(10)(24)(9)())

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }


// normal fucntion convert into arrow function
// currying function is very important
//cors origin policy
// const add = a => b => b ? add(a + b) : a;
// console.log(add(10)(20)(30)())


// cors -> Cross Origin Resource Sharing
// doamin name(A)
// domain name(b)


// Implement infinite scrolling These I will be tried

// node



//  it supports server side as well as well client side rendering

// But I am unable to the configure the server side rendering and client side in react js

// Lazy loading
// code splitting in react
// ErrorBoundary in react js


//CSR SSR

// Razor pay integration Third party Integration

// Razor pay Integration with react js

// it is very to use Third party intgration in react js project

// how to configure the errors in Express js Framework
// lots of ueses of firebase application

// It is just a Real time database


// FCM ->>>> Firebase cloud messaging
// GCM-->>>>>Google cloud Messaging


var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function () {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();


//bar
//bar
// undefined
//bar


// Nice concept first time I got understood
function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return {
        bar: "hello"
    };
}
console.log(foo1())
console.log(foo2())

// IIFE(Immediately function expression)

// (function () {
//     console.log(1);
//     setTimeout(function () { console.log(2) }, 1000);
//     setTimeout(function () { console.log(3) }, 0);
//     console.log(4);
// })();


// (function () {
//     console.log("hey man");
// })();


// 


// (function (x) {
//     return (function (y) {
//         console.log(x);
//     })(2)
// })(1);
// output like  1 4 3 2


var length = 10;
function fn() {
    console.log(this.length);
}

var obj1 = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};

// obj1.method(fn, 1);



var b = 1;
function outer() {
    var b = 2
    function inner() {
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();


function inner() {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}



// I have forgot the concept of stopwatch something(how to configure the solution)

// We will be practice StopWatch something



const arr1 = [1, 2, 3];

// array is an iterable in javaScript
// we can not destructed the object because the object is not iterable

const object4 = { x: 1, y: 2, z: 3 };

// console.log([...arr1, Object.values(object4)]);


// console.log([...object4])



// most important question in jvascript

// object is not iterable because it should not have iterable property 

const testArray = [1, 2, 3, 4, 5];

const res = testArray.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        return acc + curr;
    }
    return acc;
}, 0);
// console.log(res);

// [1,2,3,4,5]


// by clockwise rotation in javaScript It is very simple to rotate  the element by using transpose the array element

let m = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];



const clockWise = (mat) => {
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < r; c++) {
            let temp = mat[r][c];
            mat[r][c] = mat[c][r];
            mat[c][r] = temp;
        }
    }
    let finalMat = mat.map((r) => r.filter(el => el > 9));

    return finalMat;
};



// matrix rotation
// console.log(clockWise(m))



// Before Webpack

// Grunt
// Module  Bundler and make module


// There are many types of webpack in
//  make build and production build


// Parcel,
// Vite,
// Turbopack
//canvas
// We can use JavaScript to draw the Graphics
//canvas has Severals method to draw the graphics like


// There are three types of module in node js  application
// 1. Core module(Built in module)
// 2. Local Module likewise(exports and imports)
// 3. Third party module(likewise(mongoose))



let arr2d = [[3, 4], [5, 2], [10, 1]]
let sortedArr = arr2d.sort((a, b) => a[1] - b[1]);
// console.log(sortedArr)


let arr6 = [
    { "id": 1, "x": 2, "y": 3 },
    { "id": 2, "x": 3, "y": 6 }
]
let arr8 = [
    { "id": 2, "x": 10, "y": 20 },
    { "id": 3, "x": 0, "y": 0 }
];
let mergedArr = [...arr6, ...arr8];
let mergedDuplicate = mergedArr.filter((item, index) => {
    return mergedArr.findIndex(el => el.id === item.id) === index;
})
console.log(mergedDuplicate);

let nums = [4, 1, 2, 1, 2];

let ans = nums.filter((el, index) => {
    return nums.indexOf(el) !== index;
});
console.log(ans);


// let map = new Map();
// for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//         map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//         map.set(nums[i], 1);
//     }
// }
// map.forEach((value, key) => {
//     if (value === 1) {
//         console.log(key)
//     }
// })


var singleNumber = function (nums) {

    let map = new Map();
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    map.forEach((value, key) => {
        if (value === 1) {

            ans = key;
        }
    });
    return ans;

};
// console.log(singleNumber(nums));




let nums1 = [3, 1]
let nums2 = [2, 3]
let nums3 = [1, 2]


var twoOutOfThree = function (nums1, nums2, nums3) {
    let ans = [];
    nums1.forEach((el) => {
        if (nums2.includes(el) || nums3.includes(el)) {
            ans.push(el)
        }
    });

    return ans;
};

console.log(twoOutOfThree(nums1, nums2, nums3));



///


let nums4 = [1, 2, 3, 2, 5]

var sumOfUnique = function (nums) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else
            map.set(nums[i], 1);
    }
    let ans = 0;
    map.forEach((value, key) => {
        if (value === 1) {
            ans = ans + key;
        }

    });
    return ans;

};


console.log(sumOfUnique(nums4))





let s = "Hello how are you Contestant";
let k = 4;
var truncateSentence = function (s, k) {
    let arraySplit = s.split(" ");
    let wordSearch = arraySplit.slice(0, k);
    return wordSearch.join(" ");
};


console.log(truncateSentence(s, k));

let digits = [9];
let digitNUm = parseInt(digits.join("")) + 1;
let string = digitNUm.toString();

console.log(string.split(""))



//
let n = 10;
let callBack = ["call", "call", "call"];
let call = [];

callBack.forEach((el, index) => {
    call.push(n + index);
});


console.log(call);


function abc() {
    return function () {
        return 10;
    }
}
console.log(abc()());

//This is simple nuber coding Question

let number = [[1, 2], [3, 4]];
let sum = 0;
number.forEach((el) => {
    sum = sum + el[0] + el[1];
});
console.log(sum);



let list1 = [
    { name: "sbf", code: 1 },
    { name: "bvn", code: 2 },
    { name: "uth", code: 3 },
    { name: "jkw", code: 5 },
    { name: "esk", code: 9 },
    { name: "njm", code: 10 },
    { name: "rjm", code: 2 },
    { name: "abv", code: 5 },
    { name: "arv", code: 9 },
    { name: "pjm", code: 11 }
];


let arr2 = [20, 40, 60, 15, 10, 11, 9]


let sorted = list1.sort((a, b) => a.name - b.name ? 1 : -1);
console.log(sorted);
// console.log(sortedName);



var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
const item = items.sort(function (a, b) {
    return a.value - b.value
});
console.log(item);


let num7 = [-2147483648, -2147483647]
var findPeakElement = function (nums) {

    let largetsNumber = Number.NEGATIVE_INFINITY
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largetsNumber) {
            largetsNumber = nums[i];
            index = i;
        }
    }
    return index;
};
// console.log(findPeakElement(num7));


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


let word1 = "abc";
let word2 = "pqr";

var mergeAlternately = function (word1, word2) {
    let mergeString = [];
    let word3 = word1.split('');
    let word4 = word2.split('');
    let i = 0, j = 0;
    while (i < word3.length && j < word4.length) {
        mergeString.push(word3[i]);
        mergeString.push(word4[j]);
        i++;
        j++
    }
    return mergeString.join('');
};

// console.log(mergeAlternately(word1, word2));


let num = "51230100"

let numbe = num.split("");
let arrNum = []
numbe.forEach(el => {
    if (el !== '0') arrNum.push(el);
})
// console.log(arrNum.join(''));


// leedcode  question
let sp = "aacbcb"

var areOccurrencesEqual = function (s) {
    let map = new Map();
    let sArr = s.split("");

    for (let i = 0; i < sArr.length; i++) {
        if (map.has(sArr[i])) {
            map.set(sArr[i], map.get(sArr[i]) + 1);
        } else {
            map.set(sArr[i], 1);
        }
    }

    let newArr = [];
    map.forEach((value, key) => {
        console.log(`${value} and ${key}`);
        newArr.push(value);

    });
    // console.log(newArr);

    // let binary = false;
    for (let i = 0; i < newArr.length - 1; i++) {
        // console.log(newArr[i + 1]);
        if (newArr[i] !== newArr[i + 1]) return false;
    }
    return true;
};

// 8 = "51230100";
var removeTrailingZeros = function (num) {

    let number = parseInt(num);
    while (number % 10 === 0) {
        number = number / 10;
    }
    console.log(number.toString())
    return number.toString();
};

// removeTrailingZeros(nums8)




// let nums9 = [1, 2, 3]
// let nums10 = [2, 4, 6]

// var findDifference = function (nums1, nums2) {
//     let set1 = [...new Set(nums1)]
//     let newArr = [];
//     let newArr1 = [];
//     let newArr2 = []
//     nums1.forEach(el => {
//         if (!nums2.includes(el)) {
//             newArr1.push(el)
//         }

//     });
//     newArr.push(newArr1);
//     nums2.forEach(el => {
//         if (!nums1.includes(el)) {
//             newArr2.push(el)
//         }

//     });
//     newArr.push(newArr2);
//     return newArr;

// };

// findDifference(nums9, nums10)


let grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2]];

let ans1 = 0;
grid.forEach(el => {
    el.forEach(e => {
        if (e < 0) ans1++;
    })
});
// console.log(ans1);


var addBinary = function (a, b) {
    var dec = Number(parseInt(a, 2)) * Number(parseInt(b, 2));
    console.log(Number(parseInt(a, 2),))
    return dec.toString(2);
};

// console.log(addBinary('11', "11"));


var majorityElement = function (nums) {
    let n = nums.length;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    map.forEach((value, key) => {
        // console.log(value, key);
        let ans;
        if (value > Math.floor(n / 2)) {
            console.log(`${key} hi abdul`);
            ans = key;
        }
    })
    // console.log(ans)
    return ans;
};

// console.log(majorityElement([3, 2, 3]));
