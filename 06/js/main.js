//var someArray = [8, 22, 1];
/*
for (i = 0; i <= someArray.length; i++) {

    if (someArray[0] < someArray[i++]) {
        // var a = someArray[i];
        var a = someArray.slice(i);
        someArray.unshift(a);

        console.log(someArray);
    }

}

console.log(someArray);
*/
/*
console.log(someArray.sort());

function sortNumber(a, b) {
    return a - b;
}*/

/*
var someArray = [8, 22, 1];
while (true) {
    var text = prompt('enter text');
    if (text === undefined || text === null || text === '') {
        var arrToString = someArray.join(', ');
        document.write(arrToString);
        break;
    }
    addText(text);
}

function addText(text) {
    someArray.push(text);
}*/

var arrNumber = [1, 15, 12, 30, 8, 27];

for (i = 0; i < arrNumber.length; i++) {


    console.log(arrNumber[i], arrNumber[i]);


}
/* if (arrNumber[i] < arrNumber[i]) {
var newElement = arrNumber.splice(i, 1);
console.log(newElement);
arrNumber.unshift(+newElement);

console.log(arrNumber);
*/

/*if (arrNumber[0] < arrNumber[1]) {
    var newElement = arrNumber.splice(1, 1);
    console.log(newElement);
    arrNumber.unshift(+newElement);

    console.log(arrNumber);

}*/

// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
var arrLetters = ['a', 'b', 'c'];
var arrNumbers = [1, 2, 3];
var newArr = arrLetters.concat(arrNumbers);
document.write(newArr + '<br>');

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var arrSortNumber = [1, 2, 3];
var arrReverse = arrSortNumber.slice();
arrReverse.sort().reverse();
document.write(arrReverse + '<br>');

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
var arrSome = [3, 4, 1, 2, 7];
arrSome.sort();
document.write(arrSome + '<br>');

//Дан массив [3, 4, 1, 2, 7]. создайте новый массив с чётными значениями
var difArr = [3, 4, 1, 2, 7];
var evenArr = difArr.splice(0);
console.log(evenArr);

for (i = 0; i < difArr.length; i++) {
    if (difArr[i] % 2 == 0) {
        var evenArr = difArr.splice(i);
    }
    document.write(evenArr + '<br>');
}







