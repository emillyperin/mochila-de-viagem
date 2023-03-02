const form = document.getElementById("novoItem"),
      listItems = document.getElementById("lista");

form.addEventListener("submit", (evento) => { 
    evento.preventDefault(); 

    createElement(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);

});

function createElement(name, quantity) {

    const newItem = document.createElement('li');
    newItem.classList.add('item')

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = quantity;

    newItem.appendChild(numberItem);
    newItem.innerHTML += name;

    listItems.appendChild(newItem);

}