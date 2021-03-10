var mainDocument = document.querySelector("body");

var feedbackBlock = document.createElement("div");
var logo = document.createElement("img");

var title = document.createElement("h1");
title.textContent = "Создание сайта";

var subTitle = document.createElement("h2");
subTitle.textContent = "Руководитель отдела маркетинга компании 'Stiker wall'";

var userComment = document.createElement("p")
userComment.textContent = "Спасибо, команде за качественно проделанную работу. Сайт был создан в оговренные сроки и без единного бага.";

var subUserComment = document.createElement('span');
subUserComment.textContent = 'Рад, что друзья посоветовали именно Вас';

function addElement(parentElem, addElem) {
    parentElem.appendChild(addElem)
}

addElement(mainDocument, feedbackBlock);
addElement(feedbackBlock, logo);
addElement(feedbackBlock, title);
addElement(feedbackBlock, subTitle);
addElement(feedbackBlock, userComment);
addElement(userComment, subUserComment);

function setAttr(elem, className) {
    elem.setAttribute("class", className)
}

setAttr(feedbackBlock, "feedback_container");
setAttr(logo, "logo");
setAttr(title, "title");
setAttr(subTitle, "subtitle");
setAttr(userComment, "user_text");
setAttr(subUserComment, "user_subtext");









