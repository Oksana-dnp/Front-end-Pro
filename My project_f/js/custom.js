const testQuestion = document.querySelector('.test__form__section_1');
const testSecondSection = document.querySelector('.test__form__section_2');
const testThirdSection = document.querySelector('.test__form__section_3');
const inputUserName = document.querySelector('.wellcome__pop__up__item');
const inputUserEmail = document.querySelector('input[data-name="userEmail"]');

const popUpTimeOver = document.querySelector('.hide');
const btnTryAgain = document.querySelector('.time__over input');



const startBtn = document.querySelector('.startBtn');
const nextBtn = document.querySelector('#btn_block_1');
const nextBtn_2 = document.querySelector('#btn_block_2');
const btnGetResults = document.querySelector('#result');

console.log('results ', btnGetResults)



//cчетчик времени 20 минут на тест

async function startCounter() {
    let testTime = new Date();
    testTime.setMinutes(testTime.getMinutes() + 10);
    console.log('testTime-->', testTime);
    function count() {
        let currentData = new Date();
        let counter = testTime - currentData;
        let minutesCounter = Math.floor(counter / 1000 / 60);
        let secondsCounter = Math.floor((counter - minutesCounter * 1000 * 60) / 1000);
        let timer = document.querySelector('.time__counter__item');
        //чтото не совсем то...

        if (minutesCounter >= 0 && secondsCounter > 0) {
            minutesCounter < 10 ? timer.textContent = `0${minutesCounter}:${secondsCounter}` : timer.textContent = `${minutesCounter}:${secondsCounter}`
            secondsCounter < 10 ? timer.textContent = `${minutesCounter}:0${secondsCounter}` : timer.textContent = `${minutesCounter}:${secondsCounter}`
        } else if (minutesCounter > 0 && secondsCounter == 0) {
            minutesCounter < 10 ? timer.textContent = `0${minutesCounter}:${secondsCounter}` : timer.textContent = `${minutesCounter}:${secondsCounter}`
            secondsCounter < 10 ? timer.textContent = `${minutesCounter}:0${secondsCounter}` : timer.textContent = `${minutesCounter}:${secondsCounter}`
        } else {
            timer.textContent = `0${minutesCounter}:0${secondsCounter}`
            popUpTimeOver.classList.add('active');
            clearInterval(timerId);
            btnTryAgain.addEventListener('click', () => {
                let inputsCases = document.querySelectorAll('input[name^="question_"]');
                for (value of inputsCases) {
                    value.checked = false;
                }
                timer.textContent = `10:00`
                console.log('counter', startCounter)
                btnTryAgain.parentNode.classList.remove('active');

                startCounter()
            });

        };
    }
    let timerId = setInterval(count, 1000);
}



/*function timeFormat(param, count) {

    switch (param) {
        case param > 10:
            count = `${param}`;
            break;
        case 0 <= param < 10:
            count = `0${param}`;
            break
    }
    return count
}*/



//пользователь вводит данные и начинается тест

inputUserName.addEventListener('blur', setUserData);
inputUserEmail.addEventListener('blur', setUserData);


//если пользователь раньше вводил свои данные, они автоматически подтяшиваються


//if (inputUserName.value.length === 0) inputUserName.value = localStorage.getItem('userName');
//if (inputUserEmail.value.length === 0) inputUserEmail.value = localStorage.getItem('userEmail');

function setUserData(e) {
    if (e.target.value.length > 0)
        localStorage.setItem(`${e.target.dataset.name}`, e.target.value);
}

startBtn.addEventListener('click', userRegistration);
function userRegistration(e) {
    let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //валидация полей
    //сделать валидацию для имени!!!!!
    if (inputUserName.value.length === 0 || regMail.test(inputUserEmail.value) == false) {
        alert('Проверте корректность ввода e-mail')
    } else {
        startCounter();
        e.target.parentNode.parentNode.classList.add('form__block');
    }
}

function getResults(e) {
    let usersAnswers = document.querySelectorAll('span[class="userAns"]');
    let answersResult = [];
    for (let item of usersAnswers) {
        let usersAnswer = item.innerText;
        answersResult.push(usersAnswer);
        console.log('usersAnswer-->', answersResult);
    }
}
//хочу получить массив с верными ответами
//но функционала пока нет
function getRightAnswers() {
    let rightAnswers = [];
}


getData('data.json')
//добавление сектион с вопросами
//использовала bind? чтоб передать аргумент  'data_1/2.json' в функцию обработчик 
nextBtn.addEventListener('click', createSection.bind(this, 'data_1.json'));
nextBtn.addEventListener('click', goNextPage);
nextBtn_2.addEventListener('click', createSection.bind(this, 'data_2.json'));
nextBtn_2.addEventListener('click', goNextPage);

function createSection(url) {
    getData(url)
}

function goNextPage(e) {
    let index = e.target.dataset.page;
    let currentSection = document.querySelector('section[class*="active"]');
    let newSection = document.querySelector(`section[class*="block_${index}"]`);
    currentSection.classList.remove("active");
    newSection.classList.add("active");
}


async function getData(url) {
    let fetchData = fetch(url)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log('error')
        });
    let result = await fetchData
    renderTestCases(result);
}


async function renderTestCases(list) {

    list.forEach((item) => {

        let span = document.createElement('span');
        let newSomeText = item.question.replace('______', () => {
            return `<span class="userAns"></span>`
        });

        let container = document.createElement('div')
        let question = `<div class="title" data-title="${item.question}">
                    <span class="title-question">${item.id}. ${newSomeText}</span>
                                </div>`
        container.innerHTML = question;

        if (item.id <= 10) {
            testQuestion.appendChild(container);
        } else if (item.id <= 20) {
            testSecondSection.appendChild(container);
        } else if (item.id > 20) {
            testThirdSection.appendChild(container);
        }

        for (index in item.answers) {
            let questionItem = `<div class="answer" >
                        <label>
                            <input type="radio" name="question_${item.id}" data-answer="${item.answers[index].correct}" data-id="${item.id}">
                                ${item.answers[index].answer}                         
                          </label>
                          </div>`
            container.innerHTML += questionItem;
        }

    })

    let inputValue = document.querySelectorAll('input[name^="question_"]');
    //вешаем обработчик событий на инпут с ответом пользователя
    getInputsEvent(inputValue);
}

function getInputsEvent(array) {
    for (let value of array) {
        value.addEventListener('click', pasteAnswer);
    }
}


//при выборе ответа пользователя вставляет значение в прeдложение

function pasteAnswer(e) {
    //получаю ответ пользователя
    console.log('this', this.dataset.answer)
    let userAnswer = e.target.parentNode.innerText;
    //через общего родителя получаю фразу, куда необходимо вставить ответ пользователя
    let parrent = e.target.parentNode.parentNode.parentNode;
    let titleReplace = parrent.querySelector('.userAns');
    titleReplace.textContent = userAnswer;
    saveUserAnswers(this);
}

//save user's answer
//в начало ко всем переменным?
var answers = [];

//сложность пользователь менял свои ответы, нужно было исключить повторения т.е. заменять, если ответ на этот вопрос уже сохранялся
function saveUserAnswers(elem) {
    //ответ на вопрос
    let item = {
        id: `${elem.dataset.id}`,
        answer: `${elem.dataset.answer}`
    };
    //проверяем не сохранен ли ответ на этот вопрос в массив ответов
    let result = answers.find((e, i) => {
        if (e.id == elem.dataset.id) {
            answers[i] = item;
            return true
        }
    })
    if (!result) {
        answers.push(item)
    }
    //сохраняем ответы пользователя
    localStorage.setItem("answers", JSON.stringify(answers))
    //let setAnswers = JSON.parse(localStorage.getItem("item"));
}

//считаем правильные ответы
function countAns(array) {
    let userAnswersArray = [];
    for (let i = 0; i < array.length; i++) {
        userAnswersArray.push(array[i].answer);
    }
    let allAnswers = userAnswersArray.filter((value) => value === 'true');
    return allAnswers.length
}

//GET results

btnGetResults.addEventListener('click', userGetResult);

function userGetResult(e) {
    let resultInfo = document.querySelector('.results');
    let resaltsInner = document.querySelector('.results__inner');
    let answers = JSON.parse(localStorage.getItem('answers'));
    countAns(answers)
    let result = countAns(answers);
    resaltsInner.classList.add('active');
    resultInfo.innerText = `${result}`;
    console.log('result', result);
}