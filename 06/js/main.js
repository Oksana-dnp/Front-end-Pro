// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
var arrLetters = ['a', 'b', 'c'];
var arrNumbers = [1, 2, 3];
var newArr = arrLetters.concat(arrNumbers);
document.write(newArr + '<br>');

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var arrSortNumber = [1, 2, 3];
arrSortNumber.sort().reverse();
document.write(arrSortNumber + '<br>');

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
var arrSome = [3, 4, 1, 2, 7];
arrSome.sort();
document.write(arrSome + '<br>');

//Дан массив [3, 4, 1, 2, 7]. создайте новый массив с чётными значениями
var difArr = [3, 4, 1, 2, 7];
var evenArr = [];
for (i = 0; i < difArr.length; i++) {
    if (difArr[i] % 2 == 0) {
<<<<<<< HEAD
        evenArr.push(difArr[i]);
=======
        var evenArr = [difArr[i] + ', '];
>>>>>>> d7cd5d43ce2fa24cc31f987c0f8695525ccf5c73
    }
}
document.write(evenArr + '<br/>');








