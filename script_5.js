const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let i = 0
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
while (i <= books.length - 1){
  if (books[i].rented > 1)
  console.log(`${books[i].title} Le livre a été emprunté plus d'une fois`);
  
  if (books[i].rented < 1) 
  console.log(`${books[i].title} Le livre n'a pas été emprunté plus d'une fois`);
  i++
}

console.log("Quel est livre le plus emprunté ?")
books.sort((a, b) => a.rented - b.rented);
console.log(books[books.length - 1]);

console.log("Quel est livre le moins emprunté ?")
books.sort((a, b) => a.rented - b.rented);
console.log(books[0]);

console.log("Trouve le livre avec l'ID: 873495 ;")
function finder(id) {
  return id.id === 873495;
}
console.log(books.find(finder));




console.log("Supprime le livre avec l'ID: 133712 ;")
books.splice(6, 1)
console.table(books)

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
function tri(a,b)
{
	if (a.title < b.title) return -1;
	else if (a.title == b.title) return 0;
	else return 1;
}
console.table(books.sort(tri))