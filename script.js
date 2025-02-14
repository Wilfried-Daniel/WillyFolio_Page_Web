//Pour animer le texte avec l'effet de saisie au clavier
const textAnim = document.querySelector(".text div");
new Typewriter(textAnim, {
    loop: true, //Répéter l'action
    deleteSpeed: 50
})
.typeString('Developpeur web, ') //ajout du texte
.pauseFor(300) //Pause de 300ms
.typeString('Assistant comptable') //ajout du texte
.pauseFor(1000) //Pause de 1s
.start();

//Pour faire apparaitre le texte au clic
document.addEventListener("DOMContentLoaded",
    function () {
        const button = document.getElementById('click'); //Définir une variable pour Récuper le ID de mon bouton
        const textContainer = document.getElementById('textanime'); //Définir une autre variable pour Récuper le ID de la zone ou mon texte devra apparaître
        button.addEventListener('click', function() {  //Définir l'action qui suivra au click de mon bouton
            textContainer.textContent = "Bienvenue dans mon univers !!!"; //Définir le texte qui s'affichera au click de mon bouton
        });
    });