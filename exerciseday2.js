//Write a code to convert celsius to fahrenheit.
let celcius = "0";
fahrenheit = (celcius * 9) / 5 + 32;
console.log(fahrenheit);


//Prime number
let nilai = 5;
let hasilNilai = "";

for (let start = 2; start <= nilai; start++) {
  if (start === nilai) {
    hasilNilai = "Bilangan Prima";
  } else if (nilai % start === 0) {
    hasilNilai = "bukan Prima";
    break;
  }
}

console.log(hasilNilai);

//sum of 1 to N
//input
let numbers = 4;
let hasilnumbers = 0;
//process
//formula n(n+1)/2

for (let bilang = 1; bilang <= numbers; bilang++) {
  hasilnumbers = hasilnumbers + bilang;
}
console.log(hasilnumbers);

//Factorial N
//input
let fact = 5;
let hasilfact = 1;
//process

for (let proc = 1; proc <= fact; proc++) {
  hasilfact = hasilfact * proc;
}
console.log(hasilfact);

//fibonacci
//input
let f1 = 0;
let f2 = 1;
let fibo = 5;
let output = ""
//process
//Fibonacci example , 0,1,1,2,3,5,8,13....
//f1 = 0 f2 = 1 f3 = f1 + f2 f4 = f2 + f3 fn = fn-2 + fn-1

//1 proses pemeriksaan nilai dari suku n1 hingga suku ke n yang diinginkan
for (let profibo = 1; profibo <= fibo; profibo++) {
  //2 medapatkan nilai dari suku ke n dengan menjumlahkan 2 suku sebelumnya
  output += `${f1} `
  let f3 = f1 + f2;
  //3. menggeser nilai dari variable n1 dan n2 mengikuti suku ke n
  f1 = f2;
  f2 = f3;
  
}
console.log(output);