
 var edad = 81;
var es_deportista =true;
var es_fumador = false;
 console.log (es_deportista && es_fumador);
 console.log (es_deportista || es_fumador);  
 if (es_deportista &&  edad > 80) {
     console.log ('Gana premio');
 }
 //cambiar variable 
 var sergio = true;
 var otra = !sergio;

 console.log (otra);
 var nota = 3.1;
 if (nota > 4) {
     console.log ('Has aprobado'); 
 }
 
else if (nota > 3 && nota <= 4){
console.log ('promedio bajo');
}
else {
     console.log ('Has desaprobado');
 }
 function Mensaje_final (Nota) {
 var Nota = 'f'
 switch (Nota)  {
     case'A': 
         return ('muy bien');
         break;
     case 'B' :
         console.log ('bien');
         break;
    case 'C':
        console.log('Regular');
        break;
    default : 
        console.log ('Nose que decir');
     }
 }

 Mensaje_final('B');
 Mensaje_final('C');
 var mensaje_final = ('A'); {
     console.log ('muy bien ');
 }
 function Decoracion (nombre, genero){
     if ( genero == 'M'){ 
     return 'Sr ' + nombre;
     }
     else if (genero == 'F') {
        return 'Sra ' + nombre;
    }
    else  {
        return 'ingresar genero valido';
    }
}
console.log (Decoracion('pablo', 'M'));
console.log (Decoracion ('Maria', 'F'));
 var num = 1;
  while (num <= 100) {
      console.log(num);
      if (num == 50){
          break;
      }
      num = num + 1;
  }
  //Arreglos
  var listado_1 = [11, 22, 33, 44];
  //agregar al listado
var listado_3 = ['a', 'b', 'c'];

listado_3.push('d');
listado_3.pop('');
console.log (listado_3);
var listado_4 = [11 , 22, 33, 44];

var I = 0; 
//incrementar numero al arreglo o lista 
while(I < listado_4.length) {
    console.log (I);
    listado_4[I]++;
    I++;
}
console.log (listado_4);

for (I =0;I < listado_4.length; I++) {
    console.log (I);
    listado_4[I]++;
}
console.log (listado_4);
//listas multidimensionales y Arreglos
 let listado_5 = [[1, 2, 3,],[4,5,6],[7,8,9]];
 console.log (listado_5);
console.log (listado_5[1][2]);
//object
var usuario = {
    nombre:'peter',
    edad: 40,
    pais : 'colombia',
}
// signo ! negar esa variable 
 