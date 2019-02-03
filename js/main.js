//@ts-check

const log = console.log

var id = document.getElementById.bind(document);
var clas = document.getElementsByClassName.bind(document);
var tag = document.getElementsByTagName.bind(document);
var body = document.getElementsByTagName("body")[0];

/////////////////////////////////////////////////////
// Affichage du menu
//

const menu = tag("nav")[0];

function showMenu(){
    if(window.innerWidth < 768){
        menu.classList.toggle("dispMenu");
    }
}

/////////////////////////////////////////////////////
// Affichage du modal box
//

function toggleModal(modBoxSel){
    var modal = id(modBoxSel);
    var modalContent = document.getElementById(modBoxSel).getElementsByClassName("modal-wrapper")[0];


    modal.classList.toggle("show-modal-bg");
    modalContent.classList.toggle("show-modal-content");
    body.classList.toggle("lock-body");

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            toggleModal(modal.id);
        }
    });
}

/////////////////////////////////////////////////////
// Scroll Spy
//

var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top <= 0
	);
};

var pres = document.getElementById("presentation")
var cont = document.getElementById("contenu")
var port = document.getElementById("portfolio")
var joue = document.getElementById("jouer")

window.addEventListener('scroll', function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('Jouer is in viewport!');
    } else if (isInViewport(port)) {
        console.log('Port is in viewport!');
    } else if (isInViewport(cont)) {
        console.log('Contenu is in viewport!');
    } else if (isInViewport(pres)){
		console.log('Presentation is in viewport!');
    } else {
    console.log('Nope...')
    }
}, false);