function operations() {
  let nuNum1 = parseInt(document.getElementById("num1").value);
  let nuNum2 = parseInt(document.getElementById("num2").value);
  let stSelect = document.getElementById("operation").value;
  let calc;
  let nuResult = document.getElementById("result");

  switch (stSelect) {
    case "suma":
      calc = nuNum1 + nuNum2;
      nuResult.innerHTML = calc;
      break;
    case "resta":
      calc = nuNum1 - nuNum2;
      nuResult.innerHTML = calc;
      break;
    case "multiplicacion":
      calc = nuNum1 * nuNum2;
      nuResult.innerHTML = calc;
      break;
    case "division":
      calc = nuNum1 / nuNum2;
      nuResult.innerHTML = calc;
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
