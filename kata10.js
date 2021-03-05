const multiplicationTable = function(maxValue) {
  let multiplicationTable = [];
  for(i=1;i<=maxValue;i++){
    let temp = " ";
  for(j=1;j<=maxValue;j++){

     temp += (i*j)+ " ";
    }
  console.log(temp);
  }
  return  " ";
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));