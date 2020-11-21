
Skip to content
Pull requests
Issues
Marketplace
Explore
@aortizc67
aortizc67 /
JSCourse--Udemy

1
0

    0

Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights

    Settings

JSCourse--Udemy/challenge2 - JSCourse.js /
@aortizc67
aortizc67 Add files via upload
Latest commit 6bd28c0 2 days ago
History
1 contributor
101 lines (80 sloc) 3.73 KB
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/
//----------------------------------------------------
/*
1. Calculate the average score for each team, using the test data below
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
*/ 
function calculateAvg(scores){
  var sum = 0;
  for(let score of scores){
    sum += score;
  }
  return sum/scores.length;
}
// [96, 108, 89]
// [97, 112, 101]
var dolphins = { 
  score: [97, 112, 101],
  average: 0
}
// [88, 91, 110]
// [109, 95, 123]
// [109, 95, 106]
var koalas = { 
  score: [109, 95, 106],
  average: 0
}

dolphins.average = calculateAvg(dolphins.score).toFixed(2);
koalas.average = calculateAvg(koalas.score).toFixed(2);
console.log("Dolphins\' average: " + dolphins.average);
console.log("Koalas\' average: " + koalas.average);

/*
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).*/

if (dolphins.average > koalas.average){
  console.log('Dolphins win the trophy 🏆');
}
else if(dolphins.average == koalas.average){
  console.log('Both win the trophy!');
}
else{
  console.log('Koalas win the trophy 🏆');
}

/*
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 */

if (dolphins.average > koalas.average && dolphins.average >= 100){
  console.log('Dolphins win the trophy 🏆');
}
else if(dolphins.average == koalas.average && koalas.average >= 100){
  console.log('Both win the trophy!');
}
else if(koalas.average >= dolphins.average && koalas.average >= 100){
  console.log('Koalas win the trophy 🏆');      
}
else{
  console.log('No one wins 😭');
}

/*
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
*/

if (dolphins.average > koalas.average && dolphins.average >= 100){
  console.log('Dolphins win the trophy 🏆');
}
else if(dolphins.average == koalas.average && koalas.average >= 100 && dolphins.average >= 100){
  console.log('Both win the trophy!');
}
else if(koalas.average >= dolphins.average && koalas.average >= 100){
  console.log('Koalas win the trophy 🏆');      
}
else{
  console.log('No one wins 😭');
}







    © 2020 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

