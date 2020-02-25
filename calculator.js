
let nuNum1 = 0;
let nuNum2 = 0;
let stSelect="suma";
function operations() {
  nuNum1 = parseInt(document.getElementById("num1").value);
  nuNum2 = parseInt(document.getElementById("num2").value);
  stSelect = document.getElementById("operation").value;
  let nuCalc=0;
  let nuResult = document.getElementById("result");

  switch (stSelect) {
    case "suma":
      nuCalc = nuNum1 + nuNum2;
      nuResult.innerHTML = nuCalc;
      break;
    case "resta":
      nuCalc = nuNum1 - nuNum2;
      nuResult.innerHTML = nuCalc;
      break;
    case "multiplicacion":
      nuCalc = nuNum1 * nuNum2;
      nuResult.innerHTML = nuCalc;
      break;
    case "division":
      nuCalc = nuNum1 / nuNum2;
      nuResult.innerHTML = nuCalc;
      break;
    default:
      break;
  }
}

function onlyNumbers(e){
    key=e.keyCode || e.which;
    stkeyboard = String.fromCharCode(key);
    nuNumbers = "0123456789";
    espetials ="8-37-39-46";
    boSpecialKey =false;
    
    for(let i in espetials){
        if(key == espetials[i]){
            boSpecialKey=true;
        }

        if(nuNumbers.indexOf(stkeyboard)==-1 && !boSpecialKey){
            return false;
        }
    }

}
