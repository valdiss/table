/* ETAPE 1 : AFFICHER LES PRENOMS DU TABLEAU PEOPLE DANS LA COLONNE PRENOMS
Explications du code :
Pour trouver dans document:
getElementById, querySelector, querySelectorAll
  ===> const tbody = document.querySelector("tbody");
Ajouter un élément à un autre :
  ===>tbody.innerHTML="<>"; => remplace tout le contenu
ou ===> tbody.appendChild();
Créer un élément/noeud:
  ===> let tr = document.createElement("tr"); (créer un tr)
  ===> let td = document.createElement("td"); (créér un td)
Intégrer du texte dans le tr créé (donc un td) : tr.innerHTML = "<td>Camille</td>";
Intégrer le td au tr : tr.appendChild(td);
const ready = function() {
  const people=[
    "Landry",
    "Sharon",
    "Emerson",
    "Roberto"
  ];
  const tbody = document.querySelector("tbody");
    for (let i=0; i<people.length; i++) {
      // (on initialise i à partir de 0; tant que les valeurs ne dépassent pas le nb d'éléments du tableau; incrémentation)
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let firstname = document.createTextNode(people[i]);//=> people[i] = élément du tablau people;
            //===> prend chaque élément du tableau people
        td.appendChild(firstname);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}
document.addEventListener("DOMContentLoaded", ready);*/
//ETAPE 2: FAIRE 2 COLONNES ET AFFICHER PRENOMS + NOMS DU TABLEAU PEOPLE
const ready = function() {
  const people=[
    { firstname : "Landry", surname : "O'Hara"},
    { firstname : "Sharon", surname : "Dupont"},
    { firstname : "Emerson", surname : "Obama"},
    { firstname : "Roberto", surname : "Morales"},
  ];
  const tbody = document.querySelector("tbody");
    for (let i=0; i<people.length; i++) {
      // (on initialise i à partir de 0; tant que les valeurs ne dépassent pas le nb d'éléments du tableau; incrémentation)
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let firstname = document.createTextNode(people[i].firstname);//=> people[i] = élément du tablau people;
            //===> prend chaque élément du tableau people et vérifie s'ils ont un attribut firstname, puis le retoune dans le tableau
      let td2 = document.createElement("td"); //==> création d'une deuxième colonne
      let surname = document.createTextNode(people[i].surname);
          //===> prend chaque élément du tableau people et vérifie s'ils ont un attribut surname, puis le retoune dans le tableau
        td.appendChild(firstname);// on rattache firstname à son parent (td)
        td2.appendChild(surname);// on rattache surname à son parent (td2)
        tr.appendChild(td);// on rattache td à son parent (tr)
        tr.appendChild(td2);// on rattache td2 à son parent (tr)
        tbody.appendChild(tr); //on rattache tr à son parent (tbody)
    };
}
document.addEventListener("DOMContentLoaded", ready);
