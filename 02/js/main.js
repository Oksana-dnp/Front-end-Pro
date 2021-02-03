//Hometask part 2.1

var userAge = +prompt('Сколько лет?');

var userSmokeStatus = prompt('Куришь?');

/*все равно сложно? и вопрос, если будет неверный ввод, мне тогда лучеш сделать еще и 
 else if()   {
            alert('Ну и зря')
        }

*/

if(userSmokeStatus ) {
        if(userAge < 18 ) {
            alert('Маме раскажу')
        }
        else  {
            alert('Ну и зря')
        }
    }else {
        if(userAge >= 18 ) {
            alert('Так держать!')
        } else {
            alert('Молодец, и не надо')
        }
}



else if (userAge >= 18) {
    switch (userSmokeStatus) {
        case 'Нет':
        case 'нет':
            alert('Молодец, и не надо');
            console.log('useAge->>', userAge);
            break;
        case 'Да':
        case 'да':
            alert('Ну и зря');
            console.log('userAge->>', userAge);
            break;
            default:             
            alert('Сделайте правильный ввод');
            break;            
    }
} else {
    alert('Сделайте правильный ввод');
}

//Hometask part 2.2

var xNumber = +prompt('Введите произвольное число');

var yNumber = +prompt('Введите произвольное число');

if(xNumber > yNumber) {
    alert('Число ' + xNumber + ' больше ' + yNumber);
}

else if(xNumber < yNumber){
    alert('Число ' + xNumber + ' меньше ' + yNumber);
}

else if(xNumber === yNumber){
    alert('Число ' + xNumber + ' равно ' + yNumber);
} else {
    alert('Сделайте правильный ввод');
}

//Hometask past 2.3

var kmDistance = +prompt('Введите расстояние в километрах'),
    ftDistance = +prompt('Введите расстояние в футах');

var ftDistanceKonvert = ftDistance*0.305/1000;

if(kmDistance > ftDistanceKonvert) {
    alert(kmDistance + ' километров больше, чем ' + ftDistance + ' футов')
}
else if(kmDistance < ftDistanceKonvert) {
    alert(kmDistance + ' километров меньше, чем ' + ftDistance + ' футов');
} 
else if(kmDistance === ftDistanceKonvert) {
    alert(kmDistance + ' километров равно ' + ftDistance + ' футов');
} 
else {
    alert('Пожалуйста, сделайте корректный ввод (введите число)')
}







