//Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.
var arrayMath = [4, -5, 16, -28, 36, 49, 9, 25];
console.log(arrayMath);
var newArray = arrayMath.filter(function (value, index, array) {
    var result = false;
    if (value > 0) result = true;
    return result;
})
console.log(newArray);
var sqrtArray = newArray.map(function (value, index, array) {
    return Math.sqrt(value);
})
console.log(sqrtArray);

//2)Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
var numberArray = [0, 1, 2, 0, 8, 1, 3, 4];
console.log('numberArray-->', numberArray);
//0+0=0
//0+1=1
//1+2=3
//3+0=3
//3+8=11
var result = numberArray.reduce(function (result, num, index) {
    console.log('result-->', result);
    console.log('num-->', num);
    if (result > 10) {
        document.write(index);
        return;
    } else {
        return result + num;
    }
}, 0);

