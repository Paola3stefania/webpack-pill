// import everything from main.js in js folder
/* A main.js file that will be your main
Javascript file responsible for calling the modules
that your application needs (at least the module-a and module-b)
 */

//import functions from modula a and module b
import { CardContent, createButton } from "./js/module-a.js";
import './styles/main.scss';

const appDiv = document.getElementById("app");

let card = new CardContent();
card.createCard("First Card", "assets/img/mike-dorner.png", "banana", 1);
card.appendCard(appDiv);

let cardSec = new CardContent();
cardSec.createCard("Second Card", "assets/img/carson-arias.jpg", "yellow plastic things", 2);
cardSec.appendCard(appDiv);

let cardThrd = new CardContent();
cardThrd.createCard("Third Card", "assets/img/diego-ph.png", "hand holding a lightbulb", 3);
cardThrd.appendCard(appDiv);

createButton(appDiv);