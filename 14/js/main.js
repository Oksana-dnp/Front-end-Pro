var animalItem = document.querySelectorAll('.pane');
for (var i = 0; i < animalItem.length; i++) {
    var elem = document.createElement('img');
    elem.setAttribute('src', './img/close-icon.png');
    elem.setAttribute('alt', 'close-icon');
    var firstElem = document.querySelectorAll('h3');
    animalItem[i].insertBefore(elem, firstElem[i]);
}

//ролик на ютуб про делегирование мне помог
function closeMessage(e) {
    if (e.target.tagName == 'IMG') (
        e.target.parentNode.setAttribute('class', 'pane delete')
    )
}

container.addEventListener('click', closeMessage)

/* пыталась до того так, но тут не клеится :(  как мне не вызвыть каждый clickElem из Html коллекции по его индексу...
    воможно тут что-то поправить?
var clickElem = document.querySelectorAll('img');

function closeMessage2(e) {
    this.parentNode.setAttribute('class', 'pane delete')
}
clickElem[0].addEventListener('click', closeMessage2)

*/