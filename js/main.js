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

let isInViewport = function (elem) {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top <= 0
	);
};


var ident = document.getElementById.bind(document)
let pres = "presentation"
let cont = "contenu"
let port = "portfolio"
let joue = "jouer"

window.addEventListener('scroll', function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        switchHighlight(joue);
    } else if (isInViewport(ident(port))) {
        switchHighlight(port);
    } else if (isInViewport(ident(cont))) {
        switchHighlight(cont);
    } else if (isInViewport(ident(pres))){
		switchHighlight(pres);
    } else {
        switchHighlight("none");
    }
}, false);

let highlight
let highlightDom

function switchHighlight (elem) {
    let link = "link"+elem
    let linkDom = ident(link)

    if (elem == "none"){
        if (highlight != "none" && highlight != undefined){
            highlightDom.classList.remove("curScroll")
            highlight = "none"
        }
    } else {
        if (highlight != link){
            log("do")
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