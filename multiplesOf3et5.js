function multiplesOf3et5(numberdonneparuser) {
  let somme = 0;
  for (let i = 0; i < numberdonneparuser; i++) {
    if (i % 3 === 0 || i % 5 === 0) {// modulo %  , ||==et condition les 2 
      somme += i;
    }
  }
  return somme;
}

// Example usage:
const result = multiplesOf3et5(10);
console.log(result); // Output: 23
