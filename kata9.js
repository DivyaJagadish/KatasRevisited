const camelCase = function(input) {
let check = 0 , sentence ="";
for(const char of input) {
  if(check===1){
    sentence += char.toUpperCase();
    check = 0;
  }else if(char === " ") check = 1;
  else sentence += char;
}
return sentence;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));