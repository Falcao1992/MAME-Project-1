// AFFICHER ET CACHER LA DIV BLOCK-LEFT EN CLIQUAN SUR LE TITRE DEFILANT

const blockCache = document.querySelectorAll('.blockCache')
const buttonTitre = document.querySelectorAll('.button-titre')




for (let i = 0; i < blockCache.length; i++) {
    blockCache[i].addEventListener('dblclick', function () {
        blockCache[i].style.display = 'none';
        moyenTitre[i].style.backgroundColor = 'rgba(223, 204, 32, 0.657)';
    });
}
for (let i = 0 ; i < buttonTitre.length ; i++ ) {
    buttonTitre[i].addEventListener('click', function () {
        blockCache[i].style.display = 'flex';
        moyenTitre[i].style.backgroundColor = 'red';

    });
}


// TITRE DEFILANT DE GAUCHE A DROITE 

const moyenTitre = document.querySelectorAll('.moyen-titre');




// LORS DU SCROLL LES ELEMENTS APPARAISSE AVEC UNE OPACITE QUI AUGMENTE A 1 LORSQU'IL SONT VISIBLE

const ratio = .05
const options = {
    root: null,
    rootMargin : '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } 
    })}

const observer = new IntersectionObserver(handleIntersect,options)
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
})

// boite d'aide qui apparrait et disparait lorsque l'on clique sur James

const james = document.querySelector('.james')
const jamesInvisible = document.querySelector('#jamesInvisible')
const boiteAide = document.querySelector('.helpPInvisible')
const btnClick = document.querySelector('.helpPVisible')
let isVisible = false;
let cris = new Audio('criChien.mp3');
let cris2 = new Audio('criChien2.mp3')


btnClick.addEventListener('click', () => {
    isVisible = !isVisible;
    if (isVisible){
        boiteAide.classList.add('isVisible');
        james.style.display = ('none');
        jamesInvisible.style.display = ('block');
        cris.play();
    } else {
        boiteAide.classList.remove('isVisible');
        james.style.display = ('block');
        jamesInvisible.style.display = ('none');
        cris2.play();
        }
        
    
})




