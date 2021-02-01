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

if (userAge > 18) {
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
}
