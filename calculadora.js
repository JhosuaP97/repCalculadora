

function operations(){
    let nuNum1 = parseInt(document.getElementById('num1').value);
    let nuNum2 = parseInt(document.getElementById('num2').value);
    let stSelect = document.getElementById('operation').value;
    let calc;
    let nuResult = document.getElementById('result');

    switch(stSelect){
        case "suma":
            calc = nuNum1 + nuNum2;
            nuResult.innerHTML=calc;
            break;
         case "resta":
            calc = nuNum1 - nuNum2;
            nuResult.innerHTML=calc;
            break;
        case "multiplicacion":
            calc = nuNum1 * nuNum2;
            nuResult.innerHTML=calc;
            break;
         case "division":
            calc = nuNum1 / nuNum2;
            nuResult.innerHTML=calc;
            break;
        default:
            nuResult.innerHTML=" ";
            break;

    }

    
    
    
}


