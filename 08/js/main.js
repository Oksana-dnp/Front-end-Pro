//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice)
var text = 'aaa bbb ccc';
console.log(text.substr(8, 3));
console.log(text.substring(8));
console.log(text.slice(8));

//Преобразуйте первую букву строки в верхний регистр.
var text1 = 'я учу javascript!';
console.log(text1.replace('я', 'Я'));

//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var textDef = 'var_test_text';
var textArray = (textDef.split('_'));
console.log(textDef);
console.log(...textArray);

//Вывести в консоль рандомное число от 0 до 50
var numberX = Math.ceil(Math.random() * 50);
alert(numberX);