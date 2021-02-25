const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let i = 0
console.log("Voici tous les entrepreneurs nés dans les années 70")
while (i <= entrepreneurs.length -1){
  if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year <= 1979)
  console.log(entrepreneurs[i]);
  i++;
}

let j = 0;
array = []
console.log("Voici tous les prénoms et noms de tous les entrepreneurs")
while (j <= entrepreneurs.length -1){
  array.push(`Prénom: ${entrepreneurs[j].first}, Nom: ${entrepreneurs[j].last}`);
  j++;
}
console.log(array)

let u = 0
let o = 0
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
while (u <= entrepreneurs.length -1){
age = 2021 - entrepreneurs[u].year;
console.log(`${entrepreneurs[u].first}, son age aujourd'hui ${age}`)
u++;
}

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
function tri(a,b)
{
	if (a.last < b.last) return -1;
	else if (a.last == b.last) return 0;
	else return 1;
}
console.table(entrepreneurs.sort(tri))

