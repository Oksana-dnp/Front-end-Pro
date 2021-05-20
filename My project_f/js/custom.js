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


//сохраняем данные пользователя
function setUserData(e) {
    if (e.target.value.length > 0)
        setItem(`${e.target.dataset.name}`, e.target.value);
}

//закидывает данные в локалсторедж

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


//пользователь вводит данные и начинается тест

inputUserName.addEventListener('blur', setUserData);
inputUserEmail.addEventListener('blur', setUserData);

//cчетчик времени 20 минут на тест

async function startCounter() {
    let testTime = new Date();
    testTime.setSeconds(testTime.getSeconds() + 121);
    function count() {
        let currentData = new Date();
        let counter = testTime - currentData;
        let minutesCounter = Math.floor(counter / 1000 / 60);
        let secondsCounter = Math.floor((counter - minutesCounter * 1000 * 60) / 1000);
        let timer = document.querySelectorAll('.time__counter__item');

        timer[0].textContent = (minutesCounter < 10) ? `0${minutesCounter}` : minutesCounter;
        timer[1].textContent = (secondsCounter < 10) ? `0${secondsCounter}` : secondsCounter;


        if (minutesCounter === 0 && secondsCounter === 0) {
            popUpTimeOver.classList.add('active');
            clearInterval(timerId);

            btnTryAgain.addEventListener('click', () => {
                let inputsCases = document.querySelectorAll('input[name^="question_"]');
                for (let value of inputsCases) {
                    value.checked = false;
                }
                timer.textContent = `10:00`
                console.log('counter', startCounter)
                btnTryAgain.parentNode.classList.remove('active');

                startCounter()
            });
        }
    }

    let timerId = setInterval(count, 1000);
}


startBtn.addEventListener('click', userRegistration);
function userRegistration(e) {
    let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let regName = /^(?=.{1,15}$)[a-zA-Z]*$/
    //валидация полей
    //сделать валидацию для имени!!!!!
    if (regName.test(inputUserName.value) == false || regMail.test(inputUserEmail.value) == false) {
        alert('Проверте корректность ввода Ваших данных')
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

getData('data.json')
//добавление сектион с вопросами
//bind не прокатило удаление обработчика событий 

nextBtn.addEventListener('click', createSection.call(nextBtn, 'data_1.json'));
nextBtn.addEventListener('click', goNextPage);
nextBtn_2.addEventListener('click', createSection.call(nextBtn_2, 'data_2.json'));
nextBtn_2.addEventListener('click', goNextPage);

function createSection(url) {
    this.removeEventListener('click', createSection);
    getData(url)
}

function goNextPage(e) {
    let index = e.target.dataset.page;
    let answersObj = JSON.parse(localStorage.getItem('answers'));
    if (answersObj.length == 10 || answersObj.length == 20 || answersObj.length == 30) {
        let currentSection = document.querySelector('section[class*="active"]');
        let newSection = document.querySelector(`section[class*="block_${index}"]`);
        currentSection.classList.remove("active");
        newSection.classList.add("active");
    } else {
        alert('Вы ответили не на все вопросы');
    }
}

function showPopUp(a, b = a) {

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
    console.log('userAnser', userAnswer)
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
    setItem("answers", answers)
}

/*
function resultsStorage() {
    let usersStorage = [];
    let keys = Object.keys(localStorage);

    for (let key of keys) {
        let item = {}
        //задвоились кавычки
        item[key] = localStorage.getItem(key);
        usersStorage.push(item);
    }
    console.log('usersStorage', usersStorage)
    let i = 0;
    i = () => ++i;

    setItem(`user+${i}`, usersStorage)
    return usersStorage;

}*/



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

    let result = countAns(answers);
    resaltsInner.classList.add('active');
    resultInfo.innerText = `${result}`;
    localStorage.setItem('answers', result);
    setUserResult()
    // resultsStorage()
}

var usersInfo = [];
function setUserResult() {
    let user = localStorage.getItem('userInfo');
    if (user) {
        usersInfo = JSON.parse(localStorage.getItem('userInfo'));
        let item = {};
        item.userName = JSON.parse(localStorage.getItem('userName'));
        item.answers = JSON.parse(localStorage.getItem('answers'));
        usersInfo.push(item);
        localStorage.setItem(`userInfo`, JSON.stringify(usersInfo))
    } else {
        let item = {};
        item.userName = JSON.parse(localStorage.getItem('userName'));
        item.answers = JSON.parse(localStorage.getItem('answers'));
        usersInfo.push(item)
        localStorage.setItem(`userInfo`, JSON.stringify(usersInfo))
    }

    return usersInfo
}

function showUsersResults() {
    document.querySelector('.results__title').classList.add('active');
    let results = JSON.parse(localStorage.getItem('userInfo'));
    console.log('results', results);

    console.log('results', results);

    results.sort((a, b) => a.answers > b.answers ? -1 : 1);

    console.log('results', results);
    let container = document.querySelector('.results__info');
    let p = document.createElement('p');
    p.classList.add('users-results');
    for (item of results) {
        p = `<span>${item.userName}</span><span>${item.answers}</span><span> правильных ответов из 30</span>`;
        container.innerHTML += p;
    }

}
showUsersResults()