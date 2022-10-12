function addCalculator() {

    let count = Array.from (arguments);

    return count.reduce(function(acc,cur){

      return acc + cur

    })
  }

function Addition(a,b){
    return a+b;
}
function Subtract(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function Dividing(a,b){
    return a/b;
} 

module.exports={
    Addition,Subtract,multiplication,Dividing,addCalculator
}
