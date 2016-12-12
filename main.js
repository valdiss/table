
const ready = function() {
  // Loading
  const people = [
    { firstname: "Landry", surname: "O'Hara", adress:"St Andrews"},
    { firstname: "Sharon", surname: "O'Neil", adress:"Glasgow" },
    { firstname: "Emerson", surname: "O'Connell", adress:"Edinburgh" },
    { firstname: "Roberto", surname: "O'Maley", adress:"Dublin" }
  ];
  //
  const tbody = document.querySelector("tbody");

  let trContainer = document.createDocumentFragment();

  for(let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${people[i].firstname}</td><td>${people[i].surname}</td><td>${people[i].adress}</td>`;
      trContainer.appendChild(tr);
  }

  tbody.appendChild(trContainer);

  let btnv = document.querySelector('form #valider');
  btnv.addEventListener("click", function() {
      let inputp = document.getElementById('prenom');
      let inputn = document.getElementById('nom');
      let inputa = document.getElementById('adress');

      if (inputp.value && inputn.value && inputa.value) {
          tr = document.createElement('tr');
          tr.innerHTML = `<td>${inputp.value}</td><td>${inputn.value}</td><td>${inputa.value}</td>`;
          tbody.appendChild(tr);

          inputp.value = '';
          inputn.value = '';
          inputa.value = '';
      }
      else {
          alert('Veuillez remplir tous les champs!');
      }
  });

  let btna = document.querySelector('form #annuler');
  btna.addEventListener("click", function() {
      if (document.querySelector('tbody tr:last-child')) {
          document.querySelector('tbody tr:last-child').remove();
      }
      else {
        alert('Y\'a plus de lignes à supprimer gros!');
      }
  });
}

document.addEventListener("DOMContentLoaded", ready);
