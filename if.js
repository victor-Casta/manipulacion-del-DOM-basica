var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op2,op2) //el usuario GANO con Piedra`


var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu) {
  switch (user != cpu) {
    case user === op1 && cpu === op3:
        console.log("el usuario GANO con "+ op1);
        break;
    case user === op2 && cpu === op3:
        console.log("El usuario gano con "+ op2);
        break;
    case user === op3 && cpu === op2:
        console.log("El usuario gano con "+ op3);
        break;
    case user === cpu:
        console.log("Empate!");
        break;
    default:
        console.log("La  CPU gano!!");
  }  
}

resultado(op1,op3);