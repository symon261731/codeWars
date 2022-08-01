
function printerError(s){
    let sum = 0;
    for(let l of s ){
        if (l =='a' || l == 'b' || l == 'c' || l== 'd' || l == 'e' || l == 'f' || l == 'g' || l == 'h' || l == 'i' || l == 'j' || l == 'k' || l == 'k' || l == 'l' || l =='m'){
        sum +=0;
        }else{
            sum++;
        }
    }
    return `${sum}/${s.length}`;
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));


function sumTwoSmallestNumbers(numbers){
    numbers.sort( function(a,b){
        return a-b;
    });
    console.log(numbers);
    let sum;
    sum = numbers[0]+ numbers[1];
    console.log(sum);
}
sumTwoSmallestNumbers([52, 76, 14, 12, 4]);


function digits(n) {
    let sum = 0;
    let newN = String(n);
    for(let letter of newN){
      sum++;
    }
    console.log(sum);
  }

digits(12345467587);