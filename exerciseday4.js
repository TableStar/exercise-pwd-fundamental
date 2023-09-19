//exercise 1
//create a function that can create a triangle pattern

const nest = (height) => {    
    let numb = 1
        let nest = ""
        for(let i = 1 ; i <= height; i++){
            for(let j = 1 ; j <= i; j++){
                if(numb<10){
                    nest = nest +`0`+ `${numb} `;numb++
                }else{
                    nest = nest +`${numb} `;numb++
                }
              
            }   
           nest += "\n"
         }
        return nest
}
console.log(nest(5));

/**
 * write a function that can loop the number of times according to the input we provide, 
 * and will replace multiples of 3 with Fizz,multiples of 5 with Buzz, Multiples of 3 and 5 with fizzbuzz
 * n = total looping
 * 
*/


/**
 * create a function to calculate bmi
 * 
 */
const calcBmi = (height,weight) => {
    let hasilBmi = ""
let bmi = (weight / (height * height))
    if (bmi < 18.5) {
        hasilBmi += `less weight`
}else if (bmi>= 18.5 && bmi<= 24.9){
        hasilBmi += `ideal`
}else if (bmi>= 25.0 && bmi<=29.9){
        hasilBmi += `overweight`
}else if (bmi>=30 && bmi<=39.9){
        hasilBmi += `very overweight`
}else if (bmi>39.9){
        hasilBmi += `obesity`
}   return hasilBmi
}
console.log(calcBmi(1.73,50));
console.log(calcBmi(1.73,60));
console.log(calcBmi(1.73,80));
console.log(calcBmi(1.73,100));
console.log(calcBmi(1.73,130));

//write a function that remove odd numbers form array


const splicer = (arrayNum) => {
    
    let hasilSplice = ""
    
    for (let index = 0; index < arrayNum.length; index++) {
            if(arrayNum[index] !== arrayNum[index] % 2){
                hasilSplice += `${arrayNum.splice(index,1)},`
            }
    }
    let hasilSpliceArray = hasilSplice.split(`,`).filter(Number)
    return hasilSpliceArray
}
console.log(splicer([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));

let numbing = [1,2,3,4]
let hasilNumb = 0
for (let indexo = 0; indexo < numbing.length; indexo++) {
    hasilNumb += numbing[indexo]
    
}
console.log(hasilNumb);