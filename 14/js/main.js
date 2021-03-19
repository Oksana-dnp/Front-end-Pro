var animalItem = document.querySelectorAll('.pane');
for (var i = 0; i < animalItem.length; i++) {
    var elem = document.createElement('img');
    elem.setAttribute('src', './img/close-icon.png');
    elem.setAttribute('alt', 'close-icon');
    var firstElem = document.querySelectorAll('h3');
    animalItem[i].insertBefore(elem, firstElem[i]);
}