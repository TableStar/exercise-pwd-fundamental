// write a code to find diameter,  circumference and area of circle
//input
const PI = Math.PI;
console.log(PI);
let r = 12;
//process circumference
result = 2 * PI * r;

//output
console.log(result);

//input
r = 10;
//process diameter
result = 2 * r;

//output
console.log(result);

//input
r = 10;

//process area
result = PI * Math.pow(r, 2);
//output
console.log(result);

//write a code to find angles of triangle if two angle are given
//input
let angleA = 40;
let angleB = 60;

//process
result = 180 - (angleA + angleB);

//output
console.log(result);

//write a code to find difference in days
//input
let date1 = new Date("09/12/2023");
let date2 = new Date("11/30/2023");
//process
console.log(date1.getTime());
console.log(date2.getTime());
result = date2.getTime() - date1.getTime();
result2 = result / 8.64e7;
//output
console.log(result2);

//write a code to convert days to years, months, and days
//input
let daycount = 1300;
const year = "Year";
const month = "Month";
const days = "Days";

//process
result = daycount / 365;
resultYear = Math.floor(result);
result2 = (daycount % (resultYear * 365)) / 30;
resultMonth = Math.floor(result2);
resultdays = (daycount % (resultYear * 365)) % 30;

//output
console.log(resultYear, year, resultMonth, month, resultdays, days);
