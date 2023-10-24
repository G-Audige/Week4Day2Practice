//++++++++++++++++++++++++++++++//
//   I. VARIABLES & DATATYPES   //
//++++++++++++++++++++++++++++++//
// A. Q + A
// 1. How do we assign a value to a variable?
    let var1 = 3
// 2. How do we change the value of a variable?
    var1 = 4
// 3. How do we assign an existing variable to a new variable?
    let var2 = var1
// 4. Remind me, what are declare, assign, and define?
    // Declare is when a variable is first created
    // Assign is when a variable is given a value
    // Define is the whole process of creating a variable and first giving it a value
// 5. What is pseudocoding and why should you do it?
    // Pseudocoding is laying out the steps of what you want to do with your code. It is important because it makes it easier to follow the logic of the code/
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    // Around 80%


// B. Strings
// 1. Create a variable called firstVariable
    let firstVariable;
// 2. Assign it the value of the string "Hello World"
    firstVariable = "Hello World";
// 3. Change the value of this variable to some number
firstVariable = 1
// 4. Store the value of firstVariablein a new variable called secondVariable
    let secondVariable = firstVariable;
// 5. Change the value of secondVariable to any string.
    secondVariable = "V";
// 6. What is the value of firstVariable?
    1
// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
    let yourName = "Gloria";
    let greet = "Hello, my name is" + yourName;


// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
      const a = 4;
      const b = 53;
      const c = 57;
      const d = 16;
      const e = 'Kevin';

      console.log(a < b);
      console.log(c > d);
      console.log('Name' === 'Name');
      // FOR THE NEXT TWO, USE ONLY && OR ||
      console.log(true || false);
      console.log(false || false || false || false || false || true);
      console.log(false === false)
      console.log(e === 'Kevin');
      console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
      console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
      console.log(48 == '48');


// D. The farm
// 1. Declare a variable animal. Set it to be either "cow" or something else
    let animal = "cow"
// 2. Write code that will print out "mooooo" if the it is equal to cow
    if (animal === "cow") {
        console.log("mooooo")
    }
// 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
    if (animal === "cow") {
        console.log("mooooo")
    }
    else {
        console.log("Hey! You're not a cow.")
    }
// 4. Commit


// E. Driver's Ed
// 1. Make a variable that holds a person's age; be semantic
    let age = 1
// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
    age >= 16
        ? console.log("Here are the keys!")
        : console.log("Sorry, you are too young.")



//++++++++++++++++++++++++++++++//
//          II. LOOPS           //
//++++++++++++++++++++++++++++++//
// A. The basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
    for(let i = 0; i <= 10; i++) {
        console.log(i)
    }
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
    for(let i = 10; i <= 400; i++) {
        console.log(i)
    }
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
    for(let i = 12; i <= 4000; i +=3) {
        console.log(i)
    }


// B. Get even
// Print out the numbers that are within the range of 1 - 100
    for(let i = 2; i < 100; i++) {
        console.log(i)
    }
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    for(let i = 2; i < 100; i++) {
        if(i % 2 === 0){
            console.log(i,"<-- is an even number")
        }
        else{
            console.log(i)
        }
    }


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
    for(let i = 0; i <= 100; i++) {
        i % 5 === 0
        ? console.log(`I found a ${i}. High five!`)
        : console.log(i)
    }
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
    for(let i = 0; i <= 100; i++) {
        if(i % 5 === 0) {
            if(i % 3 === 0) {
                console.log(`I found a ${i}. Three is a crowd. High five!`)
            }
            else {
            console.log(`I found a ${i}. High five!`) 
            }
        }
        else if(i % 3 === 0) {
            console.log(`I found a ${i}. Three is a crowd.`)
        }
        else {
            console.log(i)
        }
    }


// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    let bank_account = 0
    for(let i = 1; i <= 10; i++) {
        bank_account += i
    }
// Check your work! Your bank_account should have $55 in it.
    console.log(bank_account)
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    bank_account = 0
    for(let i = 1; i <= 10; i++) {
        bank_account += i * 2
    }
    console.log(bank_account)



//++++++++++++++++++++++++++++++//
// III. ARRAYS & CONTROLS FLOW  //
//++++++++++++++++++++++++++++++//
// A. Talk about it:
// 1. What are the things in an array called?
    // The things in an array are called objects.
// 2. Do Arrays guarantee those things will be in order?
    // Yes. Arrays are always in sequential order.
// 3. What real-life thing could you model with an array?
    // The compartments of a train could be modeled with an array.


// B. Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called quotes
    let quotes = ['',"",``]


// C. Accessing elements
// Given the following array
    const randomThings = [1, 10, "Hello", true]
// 1. How do you access the 1st element in the array?
    randomThings[0]
// 2. Change the value of "Hello"to "World"
    console.log(randomThings[2])
    randomThings[2] = "World"
// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
    console.log(randomThings[2])


// D. Change values
// Given the following array:
    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1. What would you write to access the 3rd element of the array?
    ourClass[2]
// 2. Change the value of "Github" to "Octocat"
    console.log(ourClass[4])
    ourClass[4] = "Octocat"
    console.log(ourClass[4])
// 3. Add a new element, "Cloud City" to the array
    ourClass.push("Cloud City")
    console.log(ourClass)


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
    const myArray = [5, 10, 500, 20]
// 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
    myArray.push("Aegon","Brush")
    console.log(myArray)
// 2. Remove the 5from the beginning of the array.
    myArray.shift()
    console.log(myArray)
// 3. Add the string "Bob Marley"to the beginning of the array.
    myArray.unshift("Bob Marley")
    console.log(myArray)
// 4. Remove the string of your choice from the end of the array.
    myArray.pop()
    console.log(myArray)
// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
    myArray.reverse()
    console.log(myArray)


// F. Biggie Smalls
// Create a variable that contains an integer.
    let int = 5
// Write an if ... elsestatement that:

// 1. console.log()s "little number" if the number is entered is less than 100
// 2. console.log()s "big number" if the number is greater than or equal to 100.
    if(int < 100) {
        console.log("little number") 
    }
    else {
        console.log("big number")
    }


// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// 1. console.log()little number if the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".
    if(int < 5) {
        console.log("little number")
    }
    else if(int > 10) {
        console.log("big number")
    }
    else {
        console.log("monkey")
    }


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

    const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
    ];

// Thom's closet is more complicated. Check out this nested data structure!!
    const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],[
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],[
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
    ];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
    console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
    console.log(kristynsCloset)
    kristynsCloset[6] = "raybans"
    console.log(kristynsCloset)
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
    kristynsCloset[5] = "stained knit hat"
    console.log(kristynsCloset)
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
    thomsCloset[0][0]
// 5. In the same way, access one item from Thom's pants array.
    thomsCloset[1][2]
// 6. Access one item from Thom's accessories array.
    thomsCloset[2][2]
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
    console.log(`Tom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][2]}!`)
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
    thomsCloset[1][2] = "Footie Pajamas" 


//++++++++++++++++++++++++++++++//
//        IV. Functions         //
//++++++++++++++++++++++++++++++//
// B. printCool
// Write a function printCoolthat accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
    const printCoolthat = function(name) {
        console.log(name, "is cool!")
    }
    printCoolthat("Bob")


// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
    const calculateCubethat = (x) => {
        console.log(x ** 3)
    }
    calculateCubethat(3)


// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
    function isVowelthat(input) {
        if(input.length === 1) {
            if(input === "a" || input === "A" || input === "e" || input === "E" || input === "i" || input === "I" || input === "o" || input === "O" || input === "u" || input === "U") {
                return true
            }
            else {
                return false
            }
        }
        else {
            return "Only one character can be accepted."
        }
    }
    console.log(isVowelthat("A"))


// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
    const getTwoLengthsthat = function(x,y) {
        let lengths = []
        lengths.push(x.length)
        lengths.push(y.length)
        return lengths
    }
    console.log(getTwoLengthsthat("panda","crocodile"))


// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
    const strings = ["blue", "red", "green", "orange", "purple", "yellow"]
    const getMultipleLengthsthat = x => {
        let lengths = []
        for(let i = 0; i < x.length; i++) {
            lengths.push(x[i].length)
        }
        return lengths
    }
    console.log(getMultipleLengthsthat(strings))


// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
    function maxOfThreethat(x,y,z) {
        if(x >= y && x >= z) {
            return x
        }
        else if(y >= z) {
            return y
        }
        else {
            return z
        }
    }

    console.log(maxOfThreethat(8,10,10))


// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
    const fruit = ["apple", "orange", "watermelon", "catelope", "banana", "starfruit"]
    const printLongestWord = function(x) {
        let longest = ""
        for(let i = 0; i < x.length; i++) {
            if(x[i].length > longest.length) {
                longest = x[i]
            }
        }
        return longest
    }
    console.log(printLongestWord(fruit))


//++++++++++++++++++++++++++++++//
//         V. OBJECTS           //
//++++++++++++++++++++++++++++++//
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// 1. Create an object called user.
    let user = {}
// 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
    user = {
        name: "John",
        email: "JohnWorld@johnmail.com",
        age: 0,
        purchased: []
    }


// B. Update the user
// 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
    console.log(user.email)
    user.email = "JohnVerse@johnmail.com"
    console.log(user.email)
// 2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
    console.log(user.age)
    user.age++
    console.log(user.age)

// Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// 1. Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
    user.location = "John City"
    console.log(user)


// D. Shopaholic!
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
    console.log(user.purchased)
    user.purchased.push("carbohydrates")
    console.log(user.purchased)
// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
    user.purchased.push("peace of mind")
    console.log(user.purchased)
// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
    user.purchased.push("Merino jodhpurs")
    console.log(user.purchased)
// 4. Console.log just the "Merino jodhpurs" from the purchasedarray.
    console.log(user.purchased[2])


// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// 1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Graceburgh", 
    purchased: []
}
// 2. Console.log just the friend's name
console.log(user.friend.name)
// 3. Console.log just the friend's location
console.log(user.friend.location)
// 4. CHANGE the friend's age to 55
console.log(user.friend.age)
user.friend.age = 55
console.log(user.friend.age)
// 5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
console.log(user.friend.purchased)
user.friend.purchased.push("The One Ring")
console.log(user.friend.purchased)
// 6. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
console.log(user.friend.purchased)
// 7. Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1])


// F. Loops
// 1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for(let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i])
}
// 2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i])
}


// G. Functions can operate on objects
// 1. Write a single function updateUserthat takes no parameters. When the function is run, it should:
// 2. it should increment the user's age by 1
// 3. make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
const updateUser = () => {
    user.age++
    user.name = user.name.toUpperCase()
}
updateUser()
console.log(user)

// 2. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with user as the argument.
function oldAndLoudthat(x) {
    x.age++
    x.name = x.name.toUpperCase()
}
oldAndLoudthat(user)
console.log(user)