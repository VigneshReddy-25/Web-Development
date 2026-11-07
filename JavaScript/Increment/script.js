let result = document.getElementById("res");
let count = 0;
res()
function increment(){
  count +=1; 
 res();
}

function decrement(){
  count -=1; 
  res();
}

function reset(){
  count =0; 
 res();
}
  
function res(){
  result.innerHTML = `Result:${count}` ;
}