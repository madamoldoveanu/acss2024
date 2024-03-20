function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.toString = toString;
  //   this.inchidCartea = inchidCartea;
}

function toString() {
  return (
    this.title + " de " + this.author + ", si are " + this.page + " pagini."
  );
}

function inchidCartea() {
  return "Fac pauza";
}

function citeste() {
  return "Acum citesc o carte";
}
// export {Book};
export { Book, citeste, inchidCartea };
