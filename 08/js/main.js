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
var textDef = 'var_test_text';
while(textDef.includes('_')){
       textDef = textDef.replace('_','');
 }
 console.log(textDef);
var textDef = 'var_test_text';
 
while (textDef.includes('_')) {
       var newString = textDef;
       var i = newString.indexOf('_');

       var y = newString.charAt(++i).toUpperCase(); 
       console.log(y);
       newString.replace(newString.charAt(i), y);
       newString.replace('_', ''); 
       console.log(newString);
       break;
       
       
       
       while(textDef.includes('_')){
       textDef = textDef.replace('_','');
 }
       
       
       var textDef = 'var_test_text';
       var i  = textDef.indexOf('_');
        textDef.replace(textDef[i],'');
       var b = textDef.charAt(++i).toUpperCase();
       console.log(b);
      
       console.log(textDef);
       
       var NewString = textDef.slice(0,i) + textDef.slice(i++);
       console.log(NewString);
      
       
      
}
       
       var i = 


var textDef = 'var_test_text';

       var i = textDef.indexOf('_');

       var y = textDef.charAt(++i).toUpperCase();       
       textDef.replace(textDef.charAt(i), y);
 

//Вывести в консоль рандомное число от 0 до 50
var numberX = Math.round(Math.random() * 50);
alert(numberX);
