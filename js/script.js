//////////////////////////////////////////////////
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

///////////////////////////////////////////////////
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

///////////////////////////////////////////////////
function digits(n) {
    let sum = 0;
    let newN = String(n);
    for(let letter of newN){
      sum++;
    }
    console.log(sum);
  }

digits(12345467587);
////////////////////////////////////////////////////

function XO(str) {
    let newArr =str.split('');
    let sumOfX = 0;
    let sumOfO = 0;
    for ( let key of newArr){
        if(key == 'x' || key =='X'){
            sumOfX++;
        }else if (key == 'o' || key == 'O'){
            sumOfO++;
        }
    }
    if(sumOfX == sumOfO){
        return console.log(true);
    } else {
        return console.log(false);
    }
  }
  XO('xioxixxoxoxo');

///////////////////////////////////////////////////////

function filterArr(arrStr,num){
    let newArr = arrStr.filter(item => item.length==num);
    console.log(newArr);
}

filterArr(["Коррекция", "Виток", "Воздух", "Газоанализатор", "Температура"], 6);

////////////////////////////////////////////////////////


function generateRange(min,max,step){
    let Arr = [min,];
    while ( Arr[Arr.length-1] < max){
        Arr.push( Arr[Arr.length-1]+step);
    }
    Arr.pop();
    Arr.push(max);
    console.log(Arr);
}
generateRange(2,12,2);
// Другой цикл
function generate(min,max,step){
    let arr =[];
    for( let i =min;i<=max;i=i+step){
        arr.push(i);
    }
    console.log(arr);
}
generate(0,100,5);

///////////////////////////////////////////////////////////

let cycleGo = function(){
    let str='';
    for(let i=20; i>=0; i-=4){
        str+=i;
    }
    str+=' Поехали!';
    console.log(str);
}
cycleGo();