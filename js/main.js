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
// Scrollspy
//

// Condition du scrollspy condensé dans une fonction (utilisé dans le scroll event listener)
let isInViewport = function (elem) {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top <= 300
	);
};

// Variables des différentes sections de la page
let pres = "presentation"
let cont = "contenu"
let port = "portfolio"
let joue = "jouer"

// Détection des différentes sections
window.addEventListener('scroll', function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        switchHighlight(joue);
    } else if (isInViewport(id(port))) {
        switchHighlight(port);
    } else if (isInViewport(id(cont))) {
        switchHighlight(cont);
    } else if (isInViewport(id(pres))){
		switchHighlight(pres);
    } else {
        switchHighlight("none");
    }
}, false);

// Changement des styles des bouttons de navigation
let highlight
let highlightDom

function switchHighlight (elem) {
    let link = "link"+elem
    let linkDom = id(link)

    if (elem == "none"){
        if (highlight != "none" && highlight != undefined){
            highlightDom.classList.remove("curScroll")
            highlight = "none"
        }
    } else {
        if (highlight != link){
            linkDom.classList.add("curScroll")
            if (highlight == undefined || highlight == "none"){
                highlight = link
                highlightDom = linkDom
            } else {
                highlightDom.classList.remove("curScroll")
                highlight = link
                highlightDom = linkDom
            }
        }
    }
}