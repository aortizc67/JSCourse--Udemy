/*
Let's remember the first coding challenge where Mark and John compared their BMIs.

Let's now implement the method and add the BMI property to our objects and return it.
*/

var mark = {
  mass: 78,
  height: 1.69
  calcBMI: function(){
	  this.bmi = this.mass / (this.height * this.height);
	  return this.bmi;
  }
}

var john = 
{
  mass: 92,
  height: 1.95
  calcBMI: function(){
	  this.bmi = this.mass / (this.height * this.height);
	  return this.bmi;
  }
}


console.log(mark.bmi);
console.log(john.bmi);
var markHigher = mark.bmi > john.bmi;

console.log(`Is Mark\'s BMI higher than John\'s? --> ${markHigher}`);