//for - recorre un bloque de código varias veces    for/in - recorre las propiedades de un objeto  for/of - recorre los valores de un objeto iterable  while - recorre un bloque de código mientras se cumple una condición específica  do/while - también recorre un bloque de código mientras se cumple una condición específica

var estudiantes = ["Maria", "Sergio", "Rosa", "Dario"];

function saludarEstudiantes(estudiantes){
  console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i]);
}

//usando for

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
  }



//usando while
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante)
}