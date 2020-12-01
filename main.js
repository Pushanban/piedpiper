// Author: Pushan Banerjee
// Github: https://github.com/Pushanban
// Scroll Up Function

var btt = docment.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isFireFox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// Calculate height

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if ( docheight != 'undefined') {
    offset = docHeight/4;
}

// Add eventListener

window.addEventListener('scroll', function( event ) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = ( scrollPos > offset) ? "visible" : "hidden";
});

// Add Click
window.addEventListener('scroll', function( event ) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    if(scrollPos>offset){
        $('hidden').removeClass('hidden').addClass('visible');
    }
})

btt.addEventListener('click', function( event ){
    event.preventDefault;

    if (isFireFox){
        docElem.scrollTop = 0;
    } else {
        body.scrollTop = 0;
    }
});


// Redirect kar be

var x = window.location.host;
function redir_1(x) {
    window.location.replace("index.html")
}
function redir_2(x) {
    window.location.replace("about.html")
}
function redir_3(x) {
    window.location.replace("contact.html")
}