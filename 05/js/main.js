var someArray = ['a', 'b', 'c'];
//Добавьте в конец элементы 1, 2, 3.
for (i = 1; i <= 3; i++) {
    someArray.push(i);
}
console.log(someArray);
//Добавьте ему в начало элементы 4, 5, 6

var someArr = [1, 2, 3];
for (i = 6; i >= 4; i--) {
    someArr.unshift(i)
}
console.log(someArr);

//Выведите на экран первый элемент
var techSkillArray = ['js', 'css', 'jq'];
var firstElement = techSkillArray.shift();
document.write(firstElement + `<br>`);

//Выведите на экран последний элемент
var lastElement = techSkillArray.pop();
document.write(lastElement + `<br>`);

//С помощью метода slice запишите в новый элементы [1, 2, 3]
var numberArray = [1, 2, 3, 4, 5];
var newNumberArray = numberArray.slice(0, 3);
console.log(newNumberArray);