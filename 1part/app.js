import { comentarios } from "./modulo.js";

const $root = document.querySelector('#root');
const $fracmeng = document.createDocumentFragment();
const $plantilla = document.querySelector('#plantilla').content;

const $section = document.createElement("section");
$section.classList.add("cards")

console.log($plantilla)


comentarios().then((lista) => {
  lista.forEach(coment => {
    $plantilla.querySelector('div > h2').textContent = `${coment.id} - ${coment.name}`;
    $plantilla.querySelector('div > div > p').textContent = coment.email;
    $plantilla.querySelector('div > div > p ~ p').textContent = coment.body;

    $plantilla.querySelector("div").classList.add("card")

    const $clone = document.importNode($plantilla, true);
    $fracmeng.appendChild($clone)
  });
  $root.appendChild($section);
  $section.appendChild($fracmeng)
});
