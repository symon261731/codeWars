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
};
cycleGo();
////////////////////////////////////////////////////////////

function smallEnough(a,limit){
    let arr= a.filter(item=> item>=limit);
    if (arr.length !=0){
        console.log(false);
    }else{
        console.log(true);
    }
}
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100);

/////////////////////////////////////////////////////////////
//key 6

function likes(names){
    if(names.length == 1){
        return(`${names} likes this`);
    } else if (names.length == 2){
        let arr = names.join(' and ');
        return(`${arr} like this`);
    } else if (names.length == 3){
        return(`${names[0]}, ${names[1]} and ${names[2]} like this`);
    } else if(names.length >3){
        return(`${names[0]}, ${names[1]} and ${names.length-2} others like this`);
    }  else{
      return `no one likes this`;
    }
}

likes(['Peter']);
likes(['Jacob', 'Alex']);
likes(['Max', 'John', 'Mark']);
likes(['Alex', 'Jacob', 'Mark', 'Max']);

//////////////////////////////////////////////////////////////

function flattenAndSort(array) {
    let newArr = array.join(',');
    console.log(newArr);
    newArr = newArr.split(',');
    console.log(newArr);
    newArr = newArr.filter(item => item!='');
    console.log(newArr);
    newArr = newArr.map(item=> Number(item));
    newArr = newArr.sort((a,b)=> a-b);
    console.log(newArr);
  }
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]);
flattenAndSort([[],[],[],[2],[],[1]]);
//разобраться с 0

//////////////////////////////////////////////////////////////
function calcSum(arr){
    let sum =0;
    for( let elem of arr){
        if( elem> 0){
            sum+= elem;
        } else{
            sum = sum;
        }
    }
}

/////////////////////////////////////////////////////////////

function heronFormula(a,b,c){
    let s = (a+b+c)/2;
    let formula = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    formula = formula.toFixed(2);
    console.log(formula);
}
heronFormula(3,4,5);