// Выведите на экран зарплату Пети и Коли.

var obj = {
    'Коля': '1000',
    'Вася': '500',
    'Петя': '200'
};

document.write(`${obj['Коля']} <br> ${obj['Петя']} <br>`);

//Дан многомерный массив arr:
//Выведите с его помощью слово 'голубой'.

var arr = {

    'ru': ['голубой', 'красный', 'зеленый'],

    'en': ['blue', 'red', 'green'],

};
document.write(`${arr['ru'][0]} <br>`);

//При помощи get set, сделать так что бы при передачи добавлялся цвет, а при set выводились все цвета

var arr = {
    'ru': ['голубой', 'красный', 'зеленый'],
    get allColors() {
        return this['ru']
    },
    set addNewColor(value) {
        this['ru'].push(value);
        console.log(value);
    }
};

document.write(`${arr.allColors} <br>`);
arr.addNewColor = 'оранжевый';
document.write(arr.allColors);

