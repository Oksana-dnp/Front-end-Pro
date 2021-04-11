var frontEnd = window.open('', 'frontEnd', 'top=100, left=100, width = 500, height = 500, toolbar=no, scroolbar=no')
var newDoc = frontEnd.document.createElement('div')
newDoc.setAttribute('style', `width: 100%; height: 100%;
background-image: url("https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg");
background-position: center center;;
background-repeat: no-repeat;
background-size: cover;`)
frontEnd.document.body.appendChild(newDoc)

function moveWindow(moveObj) {
    function getScreen() {
        var randomX = Math.floor(Math.random() * innerWidth);
        var randomY = Math.floor(Math.random() * innerHeight);
        moveObj.moveTo(randomX, randomY)
    }
    setTimeout(closeWindow, 15000)
    setInterval(getScreen, 1000)

}
moveWindow(frontEnd)

function closeWindow() {
    frontEnd.close()
}
