import { Book, citeste, inchidCartea } from "./book.js";

//  import * from " demo.js"
//  import { func1, obj2 } from "demo.js"

function citeste() {
  return " Nu mai citesc!";
}
let carte = new Book("Poezii", "Mihai Eminescu", 250);
console.log(carte);
console.log(carte.toString());
console.log(citeste());
console.log(inchidCartea());
