//Manajemen program menggunakan GIT
/**
 *
 *
 *
 *
 *
 */

//bikin program loop perkalian dengan menampilkan perkalian tsb
//input
let kali = 9;
let limit = 10;

hasilKali = "";
//process

for (let x = 1; x <= limit; x++) {
  hasilKali+=`${kali} dikali ${x}= ${kali * x}`
  if (x !== limit){
    hasilKali += `\n`
}
}
console.log(hasilKali);
//2.tulis code untuk mengecek apa string itu palindrome
//process :
//1. deklarasi variable input, penampung kebalikan dan variable output
let palin = "Rotasator";
let palinreverse = "";

//2. membalikkan data dengan cara mengakses dari karakter terakhir dan dimasukkan ke variable penampung reverse
for (let palin1 = palin.length - 1; palin1 >= 0; palin1--) {
  palinreverse = palinreverse + palin.charAt(palin1);
}
console.log(palinreverse);

//3. jika data dan reverse data sama maka result polindrome true
if (palin.toLocaleLowerCase() === palinreverse.toLocaleLowerCase()) {
  // karena charAt karakter uppercase beda dengan charAt lowercase maka kedua variable harus dijadikan lowercase dulu
  result = "palindrome";
} else {
  result = "bukan palindrome";
}
console.log(result);
//3. tulis code  untuk mengkonversi centimeter ke kilometer
let centimet = 100000;

let kilomet = centimet / 100000;
kilomet = `${centimet} centimeter adalah ${kilomet} kilometer`;

console.log(kilomet);
//Write a code to format number as currency (IDR)
let mon = 1000;
mon1 = mon.toLocaleString("id", { style: "currency", currency: "IDR" });
console.log(mon1);

//Write a code to remove the first occurrence of a given “search string” from a string
let kataAwal = "Hello World";
let unwanted = "ell";
let kataHasil = kataAwal.replace(`${unwanted}`, "");
console.log(kataHasil);

//how to capititalize each word in string
let texter = "hello world";
let pisah = texter.split(" ");

for (let procPisah = 0; procPisah < pisah.length; procPisah++) {
  pisah[procPisah] =
    pisah[procPisah].charAt(0).toUpperCase() + pisah[procPisah].substring(1);
}
console.log(pisah);
let hasilPisah = pisah.join(" ");
console.log(hasilPisah);

//how to reverse a string
let startWord = "1234";
let wordreverse = "";

for (let procword = startWord.length - 1; procword >= 0; procword--) {
  wordreverse = wordreverse + startWord.charAt(procword);
}

console.log(wordreverse);

//Write a code to swap the case of each character from string
let swapOne = "The QuiCk BrOwN Fox";
let swapped = "";
for (let swapper = 0; swapper < swapOne.length; swapper++) {
  if (swapOne.charAt(swapper) === swapOne.charAt(swapper).toUpperCase()) {
    swapped += swapOne.charAt(swapper).toLowerCase();
  } else {
    swapped += swapOne.charAt(swapper).toUpperCase();
  }
}
console.log(swapped);

//Write a code to find the largest of two given integers
let numbA = 20;
let numbB = 13;
let hasil = "";
if (parseInt(numbA) === parseInt(numbB)) {
  hasil += `${numbA} sama dengan ${numbB}`;
} else if (parseInt(numbA) > parseInt(numbB)) {
  hasil += `${numbA} lebih besar daripada ${numbB}`;
} else {
  hasil += `${numbA} lebih kecil daripada ${numbB}`;
}
console.log(hasil);
//Write a conditional statement to sort three numbers
let A = 10;
let B = 15;
let C = 12;
let urutan = "";
if (A > B && A > C) {
  if (C > B) {
    urutan += `${A},${B},${C}`;
  } else {
    urutan += `${A},${C},${B}`;
  }
} else if (B > A && B > C) {
  if (A > C) {
    urutan += `${B},${A},${C}`;
  } else {
    urutan += `${B},${C},${A}`;
  }
} else if (C > A && C > B) {
  if (A > B) {
    urutan += `${C},${A},${B}`;
  } else {
    urutan += `${C},${B},${A}`;
  }
} else if (B===C){
  urutan += `This code need all 3 value to be different`;
}
  else if (A===B){
  urutan += `This code need all 3 value to be different`;
}
console.log(urutan);

//Write a code to change every letter a into * from a string of input
let ganti = "An apple a day the doctor away";
let pengganti = "*";
let hasilGanti = ganti.replaceAll("a", `${pengganti}`);
console.log(hasilGanti);
