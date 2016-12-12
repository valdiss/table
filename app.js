
const ready = function() {
  // Loading
  const people = [
    { firstname: "Landry", surname: "O'Hara", age: 34, height: 175 },
    { firstname: "Sharon", surname: "O'Neil", age: 51, height: 177 },
    { firstname: "Emerson", surname: "O'Connell", age: 16, height: 165 },
    { firstname: "Roberto", surname: "O'Maley", age: 30, height: 199 }
  ];
  //
  const tbody = document.querySelector("tbody");

  let trContainer = document.createDocumentFragment();

  for(let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${people[i].surname}</td><td>${people[i].firstname}</td><td>${people[i].age}</td><td>${people[i].height}</td>`;
      trContainer.appendChild(tr);
  }

  tbody.appendChild(trContainer);

}

document.addEventListener("DOMContentLoaded", ready);
