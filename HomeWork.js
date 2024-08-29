/* 
Problem-1 : 
You Went to the supermarket to buy some orange and apple.
Calculate how much money the shopkeeper will return.

****** input: *****
The first line of the input is the take you have.
the second line is the cost og 1 kg og orange ang 1 kg of apple.

******** output ************
print the result 

sample input 1000
700
output :
300

*/

var money = 1000;
var totalCost = 700;
var returnMoney = money - totalCost;
console.log(returnMoney);

/*
problem-2:
Write a Program to calculate the average marks of Mathematics,Biology, Chemistry,Physics, and bangla of a student.

******** input ********
the first line of the input is the five subjects mentioned above,respectively.

******* output *******
print the result in 2 decimal places.

sample input :
75.25, 65, 80, 35.45, 99.50

output: 71.04

*/

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var physics = 45;
var Bangla = 99.50;
var totalMarks = Mathematics + Biology + Chemistry + physics + Bangla;
var avgMarks = (totalMarks / 5);
console.log(avgMarks.toFixed(2));


/*
problem 3
You task is to divide the given number by 5 and show the remainder as the output.
********* input: *******
the first line of the input contains the number.

****** output *******
print the remainder.

sample Input : 119;
output : 4

*/

var givenNumber = 119;
var remainder = givenNumber % 5;
console.log(remainder);


/* 
Problem 4

what will be the result of the following codes:

1) const a = is NaN('11);
2) const a = isNaN (2-10);

Explain your answer.

*/