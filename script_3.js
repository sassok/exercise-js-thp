var row = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
for(let i = 1; i <= row; i++){
  let space = "";
    
  for(let l = 1; l <= row - i; l++){
    space += " ";
  }

  for(let j = 1; j <= i; j++){
    space += '#';
  }
  console.log(space);
}



