/** 1. Create a function that calculates the sum of two given numbers.
    Input: 3, 5
    Output: 8
*/

function sum(n1, n2) {
    return n1 + n2;
}

console.log("sum(3, 5)", sum(3, 5));

/** 2. Write a function that checks if a number is prime (a number that can only 
    be divided by 1 and itself without any remainder).
    Input: 7
    Output: true
*/

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("isPrime(7)", isPrime(7));
console.log("isPrime(9)", isPrime(9));

/** 3. Write a function to reverse a given string (using built in method).
    Input: "hello"
    Output: “olleh
*/

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log('reverseString("hello")', reverseString("hello"));

/** 4. Write a function to find the largest number in an arra
    Input: [1, 3, 7, 2, 4]
    Output: 7
*/

function findLargest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;

    return Math.max(...arr);
}

console.log("findLargest([1, 3, 7, 2, 4])", findLargest([1, 3, 7, 2, 4]));

/** 5. Write a function that filters an array and returns only the even number
    Input: [1, 2, 3, 4, 5, 6]
    Output: [2, 4, 6
*/

function filterEven(arr) {
    return arr.filter((num) => num % 2 === 0);
}

console.log("filterEven([1, 2, 3, 4, 5, 6])", filterEven([1, 2, 3, 4, 5, 6]));

/** 6. Implement a function to reverse a string without using the built-in reverse() method.
    Input: "route"
    Output: “etuor"
*/

function reverseString2(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log('reverseString2("route")', reverseString2("route"));

/** 7. Write a function to calculate the average value of all numbers in an array.
    Input: [1, 2, 3, 4, 5]
    Output: 3
*/

function average(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;

    return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}

console.log("average([1, 2, 3, 4, 5])", average([1, 2, 3, 4, 5]));

/** 8. Write a function that determines whether a given day number (1-7) 
    represents a weekday or weekend.
    Input: 5
    Output: "Weekday"
    Input: 7
    Output: “Weekend"
*/

function isWeekday(day) {
    if (day == 7) {
        return "Weekend";
    }

    return "Weekday";
}

console.log("isWeekday(5)", isWeekday(5));
console.log("isWeekday(7)", isWeekday(7));

/** 9. Write a function that filters an array of numbers and returns only those that
    are divisible by 2 or 3.
    Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    Output: [2, 3, 4, 6, 8, 9]
*/

function filterDivisible(arr) {
    return arr.filter((num) => num % 2 === 0 || num % 3 === 0);
}

console.log("filterDivisible([1, 2, 3, 4, 5, 6, 7, 8, 9])", filterDivisible([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/** 10. Write a function that finds the index of a given element in an array. If the
    element isn’t found, return `-1`.
    Input: [1, 2, 3, 4, 5], 3
    Output: 2
    Input: [1, 2, 3, 4, 5], 10
    Output: -1
*/

function findIndex(arr, num) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index = i;
            break;
        }
    }

    return index;
        
    return arr.indexOf(num);
}

console.log("findIndex([1, 2, 3, 4, 5], 3)", findIndex([1, 2, 3, 4, 5], 3));
console.log("findIndex([1, 2, 3, 4, 5], 10)", findIndex([1, 2, 3, 4, 5], 10));

/** 11. Write a function to calculate the factorial of a given number.
    Input: 5
    Output: 120
*/

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

console.log("factorial(5)", factorial(5));
console.log("factorialRecursive(5)", factorialRecursive(5));

/** 12. Write a function that takes an object and returns an array containing only its keys.
    Input: {name: "John", age: 30}
    Output: ["name", “age"]
*/

function keys(obj) {
    return Object.keys(obj);
}

function keys2(obj) {
    let keys = []

    for (let key in obj) {
        keys.push(key);
    }

    return keys;
}

console.log('keys({name: "John", age: 30})', keys({name: "John", age: 30}));
console.log('keys({name: "John", age: 30})', keys2({name: "John", age: 30}));

/** 13. Write a function that returns only the unique numbers from an array.
    Input: [1, 2, 2, 3, 4, 4, 5]
    Output: [1, 3, 5]
*/

function counter(arr) {
    let counter = {};

    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]] = counter[arr[i]] ? counter[arr[i]] + 1 : 1;
    }

    return counter;
}

function unique(arr) {
    let ctr = counter(arr);
    let unique = [];

    for (let key in ctr) {
        if (ctr[key] === 1) {
            unique.push(parseInt(key));
        }
    }

    return unique;
}

console.log("unique([1, 2, 2, 3, 4, 4, 5])", unique([1, 2, 2, 3, 4, 4, 5]));

/** 14. Write a function to count the occurrences of each character in a string.
    Input: "hello"
    Output: {h: 1, e: 1, l: 2, o: 1}
*/

function charCounter(str) {
    return counter(str);
}

console.log('charCounter("hello")', charCounter("hello"));

/** 15. Write a function that sorts an array of numbers in ascending order.
    Input: [5, 3, 8, 1, 2]
    Output: [1, 2, 3, 5, 8]
*/

function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

console.log("sortAscending([5, 3, 8, 1, 2])", sortAscending([5, 3, 8, 1, 2]));

/** 16. Write a function to check if a given string is an anagram of another string 
    (i.e., contains the same characters in a different order).
    Input: "listen", "silent"
    Output: true
*/

function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log('isAnagram("listen", "silent")', isAnagram("listen", "silent"));
console.log('isAnagram("listen", "hello")', isAnagram("listen", "hello"));

/** 17. Write a function that creates a car object with properties such as `model` 
    and `year’ and includes a method to display the car's details.
    Input: Toyota, 2020
    Output: "Model: Toyota, Year: 2020"
*/

function createCar(model, year) {
    return {
        model: model,
        year: year,
        display: function() {
            return `Model: ${this.model}, Year: ${this.year}`;
        }
    };
}

let car = createCar("Toyota", 2020);
console.log("car.display()", car.display());

/** 19. Write a function that checks if a given object contains a specific propert
    Input: {name: "Alice", age: 25}, "name"
    Output: true
    Input: {name: "Alice", age: 25}, "address"
    Output: false
*/

function hasProperty(obj, prop) {
    return Object.keys(obj).includes(prop);

    return obj.hasOwnProperty(prop);
}

console.log('hasProperty({name: "Alice", age: 25}, "name")', hasProperty({name: "Alice", age: 25}, "name"));
console.log('hasProperty({name: "Alice", age: 25}, "address")', hasProperty({name: "Alice", age: 25}, "address"));

/** 20. Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`) on two numbers.
    Input: 5, 3, "+"
    Output: 8
    Input: 5, 3, "%"
    Output: "Invalid operator 
*/

function calculate(n1, n2, operator) {
    switch (operator) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        default:
            return "Invalid operator";
    }
}

console.log('calculate(5, 3, "+")', calculate(5, 3, "+"));
console.log('calculate(5, 3, "%")', calculate(5, 3, "%"));
