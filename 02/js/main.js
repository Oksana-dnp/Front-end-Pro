//Hometask part 2.1

var userAge = +prompt('Сколько лет?');

var userSmokeStatus = prompt('Куришь?');

if (userAge < 18) {

    switch (userSmokeStatus) {
        case 'Нет':
        case 'нет':
            alert('Так держать!');
            console.log('userAge->>', userAge);
            break;
        case 'Да':
        case 'да':
            alert('Маме расскажу');
            console.log('userAge->>', userAge);
            break;
        default:
            alert('Сделайте правильный ввод');
            break;
    }
}

if (userAge >= 18) {
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

if(xNumber < yNumber){
    alert('Число ' + xNumber + ' меньше ' + yNumber);
}

if(xNumber === yNumber){
    alert('Число ' + xNumber + ' равно ' + yNumber);
} else {
    alert('Сделайте правильный ввод');
}




