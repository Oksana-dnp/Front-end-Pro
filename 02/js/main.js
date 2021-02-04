//Hometask part 2.1
var userAge = +prompt('Сколько лет?');

var userSmokeStatus = confirm('Куришь?');

if (userSmokeStatus) {
    if (userAge < 18) {
        alert('Маме раскажу!')
    }
    else if (userAge >= 18) {
        alert('Ну и зря!')
    }
    else {
        alert('Введите корректно свой возраст!')
    }
} else {
    if (userAge < 18) {
        alert('Так держать!')
    } else if (userAge >= 18) {
        alert('Молодец, и не надо!')
    } else {
        alert('Введите корректно свой возраст!')
    }
}

//Hometask part 2.2

var xNumber = +prompt('Введите произвольное число');

var yNumber = +prompt('Введите произвольное число');

if (xNumber > yNumber) {
    alert('Число ' + xNumber + ' больше ' + yNumber);
}
else if (xNumber < yNumber) {
    alert('Число ' + xNumber + ' меньше ' + yNumber);
}
else if (xNumber === yNumber) {
    alert('Число ' + xNumber + ' равно ' + yNumber);
} else {
    alert('Сделайте правильный ввод');
}

/*
//Hometask past 2.3

var kmDistance = +prompt('Введите расстояние в километрах'),
    ftDistance = +prompt('Введите расстояние в футах');

var ftDistanceKonvert = ftDistance * 0.305 / 1000;

if (kmDistance > ftDistanceKonvert) {
    alert(kmDistance + ' километров больше, чем ' + ftDistance + ' футов')
}
else if (kmDistance < ftDistanceKonvert) {
    alert(kmDistance + ' километров меньше, чем ' + ftDistance + ' футов');
}
else if (kmDistance === ftDistanceKonvert) {
    alert(kmDistance + ' километров равно ' + ftDistance + ' футов');
}
else {
    alert('Пожалуйста, сделайте корректный ввод (введите число)')
}
*/
