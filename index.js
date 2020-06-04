// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter1 has a local variable which means it can only be used inside the function
 *    and counter2 has a global variable which can be used anywhere in your code.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    counter2 uses closure because it has access the counter in the parent scope but
 *    return allows it to have a private variable.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Counter1 code would be preferable if you are only using the variable for that function. Counter2 would 
 *    be preferred if you want to use the variable in multiple functions.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  const min = 0;
  const max = 3;
  const score = Math.floor(Math.random() * max - min);
  return  score;
 }
 
 console.log (inning());
 

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, innings){
  let home = 0; 
  let away= 0;

  for (let i = 0; i<=innings; i++){
    home  += callback();
    away  += callback(); 
  }
  
  let score = {
    Home: home,
    Away: away,
  }
  return score;
}

  console.log (finalScore (inning, 9))


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callback,inningNumber) {
  // add the scores together for each inning
  let home = 0;
  let away = 0;

  for (i = 0; i < inningNumber; i++){
      home =+ callback() + home;
      away =+ callback() + away;
      
      let score = {
        Home: home,
        Away: away,  
    }
   console.log(`${i +1}th inning: ${home } - ${away }`)
  }
  console.log (`Final Score: Home: ${home} - Away: ${away}`)
}
  scoreboard(inning,9)
