const buttons = document.getElementsByTagName('button');
const inputRange = document.querySelectorAll('input[type="range"]');
const inputUserParam = document.querySelectorAll('input[type="text"]');
const userHeight = document.querySelector('input[class="input_height"]');
const heightTitle = document.querySelector('span[class="height_title"]');
const rangeImg = document.querySelectorAll('input[max="4"]');
const rangeValue = document.querySelectorAll('img[class="range_value"]');
const validSection = document.querySelector('.block_1')


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changePage)
}
function changePage(e) {
    let index = e.target.dataset.page;
    let currentSection = document.querySelector('section[class*="active_block"]');
    let newSection = document.querySelector(`section[class*="block_${index}"]`);
    currentSection.classList.remove("active_block");
    newSection.classList.add("active_block");
}


for (let i = 0; i < inputUserParam.length; i++) {
    inputUserParam[i].addEventListener('blur', validForm)
}

function validForm(e) {
    let value = e.target.value;

    if (!isNaN(value) && value.length > 0) {
        console.log('введите значения');
        e.target.classList.remove('invalid')
        e.target.classList.add('valid');
    } else {
        e.target.classList.remove('valid');
        e.target.classList.add('invalid');
    }
}




userHeight.addEventListener('change', (e) => {
    heightTitle.textContent = `${e.target.value} см`;
    //я с начала пыталась добавлять значение в label,но у меня либо значения добавлялись,либо полностью менялось содержимое label на значение(input удалялся)
    //все же интересует есть ли вариант, чтобы значение добавлялось непосредственно в label?
})

for (let i = 0; i < rangeImg.length; i++) {

    rangeImg[i].addEventListener('change', (e) => {
        let value = e.target.value;
        switch (value) {
            case '1':
                rangeValue[i].src = `./images/range_img_${i}_1.png`;
                break;
            case '2':
                rangeValue[i].src = `./images/range_img_${i}_2.png`;
                break;
            case '3':
                rangeValue[i].src = `./images/range_img_${i}_3.png`;
                break;
            case '4':
                rangeValue[i].src = `./images/range_img_${i}_4.png`;
                break;
        }
    })
}

