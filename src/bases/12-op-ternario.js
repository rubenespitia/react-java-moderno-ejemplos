const activo = false;

/*let mensaje = '';

if(activo){
  mensaje = 'Activo';
}else{
  mensaje = 'Inactivo';
}*/

//const mensaje = (activo) ? 'Activo' : 'Inactivo';

const mensaje = !activo && 'ACTIVO';

console.log(mensaje);