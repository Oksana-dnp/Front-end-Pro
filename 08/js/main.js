//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice)
//По невнимательности, решила выводить  именно ccc :(
var text = 'aaa bbb ccc';
console.log(text.substr(4, 3));
console.log(text.substring(4,7));
console.log(text.slice(4,7));

//Преобразуйте первую букву строки в верхний регистр.
var text1 = 'я учу javascript!';
var newText =text1.charAt(0).toUpperCase() + text1.slice(1);
console.log(newText);


//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
//с большой буквой почему-то не сложилось 
var textDef = 'var_test_text';
function textTransform(strName,x) {
    while(strName.includes(x)){
        console.log(x);
        var y = strName.indexOf(x);
       var b = strName.charAt(++y).toUpperCase();
        console.log(b);
        var c = strName.replace(strName.indexOf(y),b);
        console.log(c);
        strName = strName.replace(x,'');
             console.log(strName);
   }
}
textTransform(textDef,'_');

//Вывести в консоль рандомное число от 0 до 50
var numberX = Math.round(Math.random() * 50);
alert(numberX);
