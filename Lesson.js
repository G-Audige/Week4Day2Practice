// I. Variables & Datatypes

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
    //   const a = 4;
    //   const b = 53;
    //   const c = 57;
    //   const d = 16;
    //   const e = 'Kevin';

    //   console.log(a < b);
    //   console.log(c > d);
    //   console.log('Name' === 'Name');
    //   // FOR THE NEXT TWO, USE ONLY && OR ||
    //   console.log(true || false);
    //   console.log(false || false || false || false || false || true);
    //   console.log(false === false)
    //   console.log(e === 'Kevin');
    //   console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
    //   console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
    //   console.log(48 == '48');


// D. The farm
// 1. Declare a variable animal. Set it to be either "cow" or something else
    // let animal = "cow"
// 2. Write code that will print out "mooooo" if the it is equal to cow
    // if (animal === "cow") {
    //     console.log("mooooo")
    // }
// 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
    // if (animal === "cow") {
    //     console.log("mooooo")
    // }
    // else {
    //     console.log("Hey! You're not a cow.")
    // }
// 4. Commit


// E. Driver's Ed
// 1. Make a variable that holds a person's age; be semantic
    // let age = 1
// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
    // age >= 16
    //     ? console.log("Here are the keys!")
    //     : console.log("Sorry, you are too young.")



// II. Loops
// A. The basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
    // for(let i = 0; i <= 10; i++) {
    //     console.log(i)
    // }
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
    // for(let i = 10; i <= 400; i++) {
    //     console.log(i)
    // }
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
    // for(let i = 12; i <= 4000; i +=3) {
    //     console.log(i)
    // }


// B. Get even
// Print out the numbers that are within the range of 1 - 100
    // for(let i = 2; i < 100; i++) {
    //     console.log(i)
    // }
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    // for(let i = 2; i < 100; i++) {
    //     if(i % 2 === 0){
    //         console.log(i,"<-- is an even number")
    //     }
    //     else{
    //         console.log(i)
    //     }
    // }


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
    // for(let i = 0; i <= 100; i++) {
    //     i % 5 === 0
    //     ? console.log(`I found a ${i}. High five!`)
    //     : console.log(i)
    // }
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
    // for(let i = 0; i <= 100; i++) {
    //     if(i % 5 === 0) {
    //         if(i % 3 === 0) {
    //             console.log(`I found a ${i}. Three is a crowd. High five!`)
    //         }
    //         else {
    //         console.log(`I found a ${i}. High five!`) 
    //         }
    //     }
    //     else if(i % 3 === 0) {
    //         console.log(`I found a ${i}. Three is a crowd.`)
    //     }
    //     else {
    //         console.log(i)
    //     }
    // }


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



// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
    // The things in an array are called objects.
// Do Arrays guarantee those things will be in order?
    // Yes. Arrays are always in sequential order.
// What real-life thing could you model with an array?
//
