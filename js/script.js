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

//////////////////////////////////////////////////////////////


let y=1;
let x=y=2;
console.log(x);
console.log(typeof([] + false - null + true));

console.log([]+1+2);
///////////////////////////////////////////////////////////////


function tidyNumber(n){
    let str = String(n);
    let arr=[];
    let newArr = str.split('');
    newArr = newArr.map(item=>Number(item));
    if(newArr.length != 0){
        for(let i=0;i<newArr.length-1;i++){
            if(newArr[i]<=newArr[i+1]){
                arr.push(true);
            }else{
                arr.push(false);
            }
        }
        return arr.every(item=>item===true);
    }else{
        return true;
    }
}
tidyNumber(132435364);
tidyNumber(13579);
// КАК можно было бы решить понимай ты строки
const TidyNumber = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
      if (s[i] > s[i+1]){ return false;}
    }
    return true;
  };
///////////////////////////////////////////////////////////////////

function findMin(arg){
    arg.sort((a,b)=>a-b);
    return arg[0];
}
findMin([1,853,4531,1261,23,-51,6125,-621]);

/////////////////////////////////////////////////////////////////////


const arr =[1,5,2,1,9,2,0,7,6,1];


const starDublicate = (massiv) =>{
    return massiv.map((el,i) => {
        if( massiv.indexOf(el) === i ){
            return el;
        } else {
            return '*';
        }
    });
};

console.log(starDublicate([1,1,5,6,7,8,9,6,4,]));

////////////////////////FOR BOOTKEMP//////////////////////////////////

const changeSign = () =>{
    for ( let i=0; i<=10; i++){
        /*if(i%2 == 0){
            console.log(i);
        } else{
            console.log(-i);
        }*/
        i%2 ==0 ? console.log(i) : console.log(-i);
    }
};
changeSign();


let calcSquere = (value) => {
    if( isNaN(value) == false ){
        return Number(value)**2;
    } else {
        return `Ошибка преобразования данных`;
    }
};

console.log(calcSquere(5));
console.log(calcSquere('hello there'));
console.log(calcSquere(undefined));
console.log(calcSquere(NaN));

// пишем мапы 
const calcSquereMap = (array) =>{
   const newArr =array.map(item => item**2);
   return newArr;
};
console.log(calcSquereMap([1,2,3,46,8,5,723,75,23,612,42]));
////////////////////
const calcSqrt = (array) => {
    let newArr;
    return newArr = array.map(Math.sqrt);
};
console.log(calcSqrt([9,25,90,110,]));
////////////////////
const calcPlusInd = (array) =>{
    const newArr = array.map( (item,index) => item+=index);
    return newArr;
};
console.log(calcPlusInd([1,9,0,8,6,4,3,6,8,4,3,2,4723,]));
////////////////////
const calcMunsInd = (array) => {
    const newArr =array.map( (item,i) => item-=i );
    return newArr;
};
console.log(calcMunsInd([5,3,6,1,2,4,6,2,3,65,1,]));
///////////////////////
const calcSquereOfEven = (array) =>{
    let newArr = array.map(item => {
        if(item%2==0){
            return item**2;
        } else{
            return item;
        }
    });
    return newArr;
};
console.log(calcSquereOfEven([1,2,3,4,5,6,7,8]));
///////////////////////////
const calcSquereOfOdd = (array) =>{
    const newArr = array.map(fuckingitem => {
        if(fuckingitem%2!=0){
            return fuckingitem**2;
        } else{
            return fuckingitem;
        }
    });
    return newArr;
};
console.log(calcSquereOfOdd([1,34,56,7,7,42,1,34,78,9,87,43,2]));
////////////////////////////
const calcSumofElem = (arr) => {
    let sum=0;
    let newArr = arr.map((item)=> {
       return sum+=item;
    });
    return newArr[newArr.length-1];
};
console.log(calcSumofElem([2,4,6,8]));
//////////////////////////////

const calcDifferenceofElem = (arr) => {
    let difference = 0;
    let newArr = arr.map(item => difference-=item);
    return newArr[newArr.length-1];
};
console.log(calcDifferenceofElem([0,0,1,46,1,3,1,2,4,6]));
///////////////////////////////
const changeArrToObg = (array) =>{
    const newObj ={};
    array.map((item,i)=> newObj[i] = item);
    return newObj;
};
console.log(changeArrToObg([1,2,34,5,6,4,12,]));
/////////////////////////////////
const changeArrToObgAlternative = (arr) =>{
    const anotherObg = {};
    arr.map((item,index) => anotherObg[item] = index );
    return anotherObg;
};
console.log(changeArrToObgAlternative([5,7,4,3,78,3,1,3,6,8,'hello',]));
/////////////////////////////////
const changeArrToObgWithStr = (arrAGAIN) =>{
    const objectAgain = {};
    arrAGAIN.map((item,index) =>objectAgain[`Индекс №${index+1}`] = `Элемент:${item}`);
    return objectAgain;
};
console.log(changeArrToObgWithStr([1,6,4,7,45,21,'Oh my gush']));
////////////////////////////////
const someThing = (arrrrrrrrrrrrrr) =>{
   const newArr = arrrrrrrrrrrrrr.map((item,index) => [`INDEX:${index}, Element:${item}`]);
   return newArr;
};
console.log(someThing([1,2,35,7,4,2,45,,1,2313]));
////////////////////////////////////////////////
const removeEvery = (arr) =>{
    const newArr = arr.map((item)=>{
        let it = String(item);
        if(it.length > 1){
            return `*`;
        } else{
            return Number(it);
        }
    });
    return newArr;
};
console.log(removeEvery([5,65,4323,745,312,854,3216,13,31,2,32,2,33,]));
///////////////////////////////////////
const oneMore = (arr) =>{
    const newArr = arr.map(item =>{
      const result =  item%2==0 ? item/2 : item;
      return result;
    });
    return newArr;
};
console.log(oneMore([1,2,3,4,5,6,7,8,9,10,20]));
////////////////////////////////////////
const calcMultiply = (arr) =>{
    const anotherArr = arr.map((item,i,arr) => {
        let result= item%2==0 ? item : item*= arr[i+1];
        return result;
    });
    return anotherArr;
};
console.log(calcMultiply([1,5,6,65,3,6,8,4,1,3,67,12,257,2,5,12]));//проблема с последний элементом
///////////////////////////////////////////
//MUMBLING




///////////////////////////////
let plitByLength = (str, l) => {
    let arr = str.split('');
    let result = [];
    for (let i = 0; i < arr.length; i = +l) {
      result.push(arr.slice(0, l));
      arr.splice(0, l);
    }
    result = result.map((item) => {
      return item.join('');
    });
    return result;
  };
  console.log(plitByLength('hello there Obi-wan Kenobi', 4));




let splitByLength = (str ,sliceLength) => {
    const arr =[];
    for( let i=0; i<str.length; i+=sliceLength){
        arr.push( str.slice(i, i+=sliceLength));
    }
    return arr;
  };
  console.log(splitByLength('hello there Obi-wan Kenobi', 4));

  
  /////////////////////////////////
  

  function padIt(str,n){
    let s = str;
    for( let i=0; i<n;i++){
        if( i%2==0){
            s = '*' + s;
        }else{
            s = s+'*';
        }
    }
    console.log(s);
  }
  padIt('a',1);
  padIt('a',3);
  padIt('a',8);


  function id(str,n){
    let s = str;
    let i=0;
    while(i<n){
        if(i%2){
            s = s+'*';
        } else{
            s = '*'+s;
        }
        i++;
    }
  }
///////////////////////////////////////////////////////////////////

function z(s){
    let str = '';
    for( let i=0;i<s.length;i++){
        str+= s[i].toUpperCase();
        for(let j=0; j<i;j++){
            str+=  s[i].toLowerCase();          
        }
        str+='-';
    }
    str = str.slice(0,-1);
    console.log(str);
}
z("ZpglnRxqenU");

//////////////////////////////////////////////////


let count = (array,elem) =>{
    let sum =0;
    let arr =[]
    array.forEach((item,i) =>{
        if( item == elem){
            sum+= 1;
            arr.push(i);
        }
    });
    return `Element ${elem} found out ${sum} times \n index of element ${arr}`;
};

console.log(count([1,2,2,6,7,9,5,34,2],2));
//////////////////////////////////////////////////

let showIndex = (array)=>{
    let newArray = [];
    for(let i =0; i<array.length; i++){
        newArray.push(array.indexOf(i));
    }
    return newArray;
};

console.log(showIndex([2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,11]));
/////////////////////////////////////////////

let removeDuplicateElem = (array) =>{
    let newArr =[];
    array.forEach((item,index)=>{
        if(array.indexOf(item) == index){
            newArr.push(item);   
        }
    });
    return newArr;
};
console.log(removeDuplicateElem([2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,11]));

let removeDuplicateElem2 = (array) =>{
    let newArr = [];
    for( let i=0 ;i<array.length;i++){
        if( array.indexOf(array[i]) == i){
            newArr.push(array[i]);
        }
    }
    return newArr;
};
console.log(removeDuplicateElem2([2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,11]));

let removeDuplicateElem3 = (array) => array.filter((item,index)=> array.indexOf(item)==index );
console.log(removeDuplicateElem3([2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,11]));



/////////////////////////////////////////////////

let trimSpaces = str =>{
   let newStr=[];
   return newStr = str.split('').filter(item=> item!=' ').join(''); 
};
console.log(trimSpaces('Ко с мос'));

/////////////////////////////////////////////////////