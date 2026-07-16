let Answear1= document.getElementById("Answear1");
let Answear2= document.getElementById("Answear2");
let Answear3= document.getElementById("Answear3");
let Answear4= document.getElementById("Answear4");
let Answear5= document.getElementById("Answear5");
let button = document.getElementById("btn");
let result = document.getElementById("Result");

button.addEventListener("click", function(){
  let A1 = Answear1.value;
  let A2 = Answear2.value;
  let A3 = Answear3.value;
  let A4 = Answear4.value;
  let A5 = Answear5.value;
  if (A1 === "" || A2 === "" || A3 === "" || A4 === "" || A5 === ""){
  result.textContent="Please Answer The Empty Question."
  return;
  }
  if (A1 === "neil armstrong" || "Neil Armstrong" || "Armstrong" || "armstrong" && A2 === "Tibet" || "tibet" && A3 === "isaac newton" || "Isaac Newton" || "Newton" || "newton" && A4 == 28 && A5 == 80){
    result.textContent ="Congrata, You Answered all The Questions Right!";
  }else{
    result.textContent = "Please Check Your Wrong Answers Or Wrong Written Answers.";
  }
});