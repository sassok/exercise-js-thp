
number = prompt("De quel nombre veux-tu calculer la factorielle ?");
function facto (number){
  j = 1;
  for(let i = 1; i <= number; i++){
    j = j * i;  
  }  
  return j;
}
console.log(facto(number));

