import { post } from "./module.js"

const $root = document.querySelector("#root");
const $form = document.createElement("form");
const $input = document.createElement("input");
const $btn = document.createElement("button");
$btn.textContent = "Solicitar nuevo"
const $section = document.createElement("section");
const $fragme = document.createDocumentFragment();

$root.classList.add("main")
$btn.setAttribute("type", "submit");
$form.setAttribute("action", ``);

$section.classList.add("cards")
$input.classList.add("input")
$btn.classList.add("boton")

$form.appendChild($input)
$form.appendChild($btn)
$root.appendChild($form)
$root.appendChild($section)

const agregar = (event) => {
  event.preventDefault();
  const id = $input.value.trim();
  if (id === "") {
    alert("Esta vacio")
    $input.classList.add("error")
  }
  else {
    if (!isNaN(id)) {
      $input.classList.remove("error")
      $input.classList.add("normal")
      post(id)
        .then((respose) => {
          const $card = document.createElement("div")
          const $title = document.createElement("h2");
          const $body = document.createElement("p")

          $card.classList.add("card")

          $title.textContent = `${respose.id} - ${respose.title}`;
          $body.textContent = respose.body;


          $card.appendChild($title)
          $card.appendChild($body)


          $fragme.appendChild($card)
          $section.insertAdjacentElement("afterbegin", $fragme.firstChild)

          $input.value = "";
        })
        .catch()
    }
    else {
      alert("Ingresa solo numeros")
      $input.classList.add("error")
    }
  }
}
$form.addEventListener('submit', agregar)













// let div = document.createElement("div");
// let div2 = document.createElement("div");

// div.classList.add("hijo1");
// div2.classList.add("hijo2");


// $root.insertAdjacentElement("beforeend", div)
// $root.insertAdjacentElement("beforeend", div2)

