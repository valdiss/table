
const ready = function() {
  // Loading
  const people = [
    { firstname: "Landry", surname: "O'Hara" },
    { firstname: "Sharon", surname: "O'Neil" },
    { firstname: "Emerson", surname: "O'Connell" },
    { firstname: "Roberto", surname: "O'Maley" }
  ];
  //
  const tbody = document.querySelector("tbody");

  for(let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${people[i].surname}</td><td>${people[i].firstname}</td>`;
    tbody.appendChild(tr);
  }


}

document.addEventListener("DOMContentLoaded", ready);
