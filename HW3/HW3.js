const paddRight = (char, length) => s => {
  while(s.length < length) {
    s += char;
  }
  return s;
}



const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);


 let startYear = 1900;
 const n = 40;  endYear = 1940;

 const endYear = startYear + n;
 for (let year = startYear; year < endYear; year++) {
   console.log(year + " " + isLeapYear(year));
 }

 console.log("----");

 for (let i = 0; i < n; i++) {
   const year = startYear + i;
   console.log(i + ") " + year + " " + isLeapYear(year));
 }

 console.log("----");

 let currentYear = startYear;
 for (let i = 0; i < n; i++) {
   console.log(currentYear + " " + isLeapYear(currentYear));
   currentYear++;
 }

 console.log(currentYear);


 console.log("----");





 Вывести первые n високосных лет начиная с startYear

 let startYear = 1900;
 let n = 20;

 const endYear = startYear + n;


 let year = startYear;
 while (leapYears < 20) {
   if (isLeapYear(year)){
     leapYears++;
     console.log(year);
   }

   year++;
 }

 for (let year = startYear, leapYears = 0; leapYears < 20; year++) {
   if (isLeapYear(year)){
     leapYears++;
     console.log(year);
   }
 }


 let leapYears = 0;
 let year = startYear;
 while (true) {
   if (isLeapYear(year)){
     leapYears++;
     console.log(year);
   }

   if (leapYears >= 20) {
     break;  Вынуженный выход из цикла
   }

   year++;
 }



 for (let year = startYear; year < endYear; year++) {
   if (isLeapYear(year)) {
     console.log(year);
   }
 }

 let s = "abcdefgh";
        01234567

 for (let i = 0; i < s.length; i++){
   console.log(s[i]) ; 
 }
 console.log(s);

 let n = s.length - 1;
 for (let i = n; i >= 0; i--) {
   console.log(s[i]);
 }

 FizzBuzz
 Fizz - делится на 3
 Buzz - делится на 5
 FizzBuzz - делится на 15 (т.е. на 3 и на 5)

 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

 let n = 100;

 const fizzBuzz = n => 
  (n % 3 ? "" : "Fizz") + (n % 5 ? "" : "Buzz") || n;
   {
     if (n % 15 === 0) {
       return "FizzBuzz";
     } else if(n % 3 === 0) {
       return "Fizz";
     } else if(n % 5 === 0) {
       return "Buzz";
     } else {
       return n;
     }
   }

 for (let i = 1; i <= n; i++) {
   console.log(fizzBuzz(i));
 }


 let n = 123;

  Вывести сумму цифр

  let sn = String(n);

  let sum = 0;
  for (let i = 0; i < sn.length; i++) {
    sum += Number(sn[i]);
  }

 let sum = 0;

 while (n != 0) {
   sum += n % 10;
   n = Math.trunc(n / 10);
 }

  n % 10 = 123 % 10 = 3;
  sum += 3;
  n = 123 / 10 = 12.3;
  n = Math.trunc(12.3) = 12; 

  n % 10 = 12 % 10 = 2;
  sum += 2;
  n = Math.trunc(12 / 10) = 1;

  n % 10 = 1 % 10 = 1;
  sum += 1;
  n = Math.trunc(1 / 10) = 0;


 console.log(sum);     



 let n = 3;

 for (let i = 0; i < n; i++) {
   for (let j = 0; j < n; j++) {
     console.log("(" + i + ", " + j + ")");
   }
 }

 console.log("---");

 for (let i = 0; i < n; i++) {
   for (let j = 0; j <= i; j++) {
     console.log("(" + i + ", " + j + ")");
   }
 }

let n = 6;



for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += i;
  }
  console.log(str);
}










