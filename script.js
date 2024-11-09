var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    // verifier si l'input n'est pas vide
    if (inputField.value != "") {
        //si ce n'est pas vide alors créer un paragraphe
        var paragraphe = document.createElement('p')
    }
    
    // Ici on a créé la classe paragraphe_style de l'element p qui a ete créer
    paragraphe.classList.add('paragraphe_style');

    paragraphe.innerText = inputField.value;

    // inserer le paragraphe de l'element toDoContainer
    toDoContainer.appendChild(paragraphe);

    //vidé le champ quand le paragraphe est ajouté
    inputField.value = "";

    // Barré le paragraphe quand on click dessus

    paragraphe.addEventListener('click', function(){
        paragraphe.classList.add('paragraph_click');
        
    })

    // supprimer la tâche lorqu'on double click
    paragraphe.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraphe);
    })
}