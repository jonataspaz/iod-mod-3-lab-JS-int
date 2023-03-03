//Q1

/* 1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */

// const ucFirstLetters = (frase) => {
//     const words = frase.split(' ');
//     const mapWord = words.map(wordMap => wordMap.charAt(0).toUpperCase()+ wordMap.slice(1))

//     return  mapWord.join(' ');
// };

// console.log(ucFirstLetters('eu acho que conseguir fazer isso simples'))

//Q2 

/* 2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (…) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator. */

// const truncate = (str , max) => (str.length > max) ? str.slice(0, max) + '...' : str;

// console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

//Q3

/* 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array 
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
*/

// const animals = ['Cat' ,'Giraffe' ,'Kiwi' ,'Tiger' ,'zebra',];

// const replaceMiddleAnimal = (arr, newAnimal) => {
//     arr.splice(Math.floor(arr.length / 2), 1, newAnimal);
//     return arr
// };
// const findMatchingAnimals = (arr, beginsWith) => arrFind = arr.filter(animal => animal[0].toLowerCase() == beginsWith)

// console.log(findMatchingAnimals(animals, 'k'));
// console.log(replaceMiddleAnimal(animals, 'Hourse'));



//Q4

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

// const camelCase = (cssProp) => {
//     let prop = cssProp;
//     for (i = 0; i < prop.length; i++){
//         if (prop[i] == '-') {
//             prop = prop.replace('-', '')
//             prop = prop.replace(prop[i], prop[i].toUpperCase())
//         }
//     }
//     return prop
// }

// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display


//Q5
/* 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following: */

// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?

/* a) Explain why the above code returns the wrong answer */
    // Need use parseFloat() function to number that are imprecise.

/* b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result. */

// const currencyAddition = (float1, float2) => (parseFloat(float1) + parseFloat(float2)).toFixed(2)

// console.log(currencyAddition(0.20, 0.10));

/* c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/switch may be useful.
d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10. */

// const currencyOperation = (float1, float2, operation, numDecimals) => {
//     float1 = parseFloat(float1)
//     float2 = parseFloat(float2)
//     let result = 0
//     switch (operation) {
//         case '+':
//             result = float1 + float2
//         break;
//         case '-':
//             result = float1 - float2
//         break;
//         case '/':
//             result = float1 / float2
//         break;
//         case '*':
//             result = float1 * float2
//         break;
//     }
//     return result.toFixed(numDecimals)
//  }

//  console.log(currencyOperation(0.20, 0.10, '*', 2))


/* 6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own. */

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// const unique = (arr) => {
//     let uniquesArr = []
//     for (let i in arr) {
//         if (!uniquesArr.includes(arr[i])){
//             uniquesArr.push(arr[i])
//         }
//     }
//     return uniquesArr
// }

// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


/* 7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks. */

// const books = [
// { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
// { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
// { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
// { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];

/* a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id. */

// const getBookTitle = (bookId) => {
//     const found = books.find(book => book.id == bookId)
//     return found.title
// }
// console.log(getBookTitle(2));

/* b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950. */

// const getOldBooks = () => {
//     const result = books.filter(book =>  book.year <= 1950);
//     return result
// }
// console.log(getOldBooks());

/* c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’. */

// const addGenre = (arr) => arr.map(book => {
//     return {
//         ...book, genre: 'Classic'
//     }
// })

// console.log(addGenre(books));


/* d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial. */


// const getTitles = (authorInitial) => {
//     const bookAuthors =  books.map(book => book.author)
//     const bookByInitial = bookAuthors.filter(author => author[0] == authorInitial)
//     return bookByInitial
// }

// console.log(getTitles('A'));

/* e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date  */

// const latestBook = (arr) => {
//     let booksYear = 0
//     arr.forEach(book => {
//         if (book.year > booksYear){
//             booksYear = book.year;
//         }
//     })
//     return arr.find(book => book.year == booksYear)
// }
// console.log(latestBook(books));

/* 8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers. */
// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// // a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// const phoneBookDEF = new Map();


// // b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

// const keys = ['Daniel', 'Evelyn', 'Fiora']
// const values = ['0914322243', '0538224687', '0538224687']

// for (let i = 0; i < keys.length; i++) {
//     phoneBookDEF.set(keys[i], values[i]);
// }

// console.log(phoneBookDEF);

// c) Update the phone number for Caroline

// phoneBookABC.set('Caroline', '12345')
// console.log(phoneBookABC);

/* d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map */

// const printPhoneBook = (contacts) => {
//     console.log(contacts);
// }

// printPhoneBook(phoneBookABC)

// e) Combine the contents of the two individual Maps into a single phoneBook Map

// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book 

// for (let value of phoneBook.values()) {
//     console.log(value);
// }
/* 9. Given the below salaries object, perform the following tasks. */

// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
//     };

// const sumSalaries = (salaries) => {
//     let totalSalary = 0;
//     let topEarnerSalary = 0
//     let topEarner = ''
//     for ( let i in salaries)
//         {
//             totalSalary += salaries[i]
//             if (salaries[i] >= topEarnerSalary)
//             {   
//                 topEarnerSalary = salaries[i];
//                 topEarner = i;
//             }

//         }
//         console.log(totalSalary);
//         console.log(topEarner);
//         console.log(topEarnerSalary);
// }



// sumSalaries(salaries)


/* 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following: */

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')


// a) Print the total number of minutes that have passed so far today

// const now = new Date()
// const minutes = now.getHours() * 60 + now.getMinutes();
// console.log(minutes);

// b) Print the total number of seconds that have passed so far today

// const now = new Date()
// const seconds = now.getHours() * 60 + now.getMinutes() * 60 + now.getSeconds();
// console.log(seconds);

// c) Calculate and print your age as: 'I am x years, y months and z days old'

// const now = new Date("1995-09-22")
// const birthdate  = new Date()
// const timeDifference = birthdate - now;
// const daysDifference = timeDifference / (1000 * 3600 * 24)
// const years = Math.floor(daysDifference / 365);
// const months = Math.floor((daysDifference % 365) / 30);
// const days = Math.floor((daysDifference % 365) % 30);
// console.log(`I am ${years} years, ${months} months and ${days} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

// const daysInBetween = (date1, date2) => {
//     const date1n = new Date(date1)
//     const date2n  = new Date(date2)
//     const timeDifference = date2n - date1n;
//     return timeDifference / (1000 * 3600 * 24)
// }
// console.log(daysInBetween('2023-01-01', '2023-12-06'));