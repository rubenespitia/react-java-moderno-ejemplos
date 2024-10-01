// Desestryctyracion
//Asignacion Desestructurante

const persona = {
    nombre:'Tony',
    edad:45,
    clave: 'Ironman'
  };
  
  const {nombre:nombreSalida} = persona;
  const {nombre} = persona;
  
  console.log(nombreSalida);
  console.log(nombre);
  
  
  const retornaPersona = ({clave ,nombre, edad, rango = 'Cap'}) => {
  
    console.log(nombre, edad, rango);
  
    return{
      nombreClave: clave,
      years: edad,
      latlng:{
        lat:14.1232,
        lng:12.546
      }
    }
  
  }
  
  const {nombreClave, years, latlng:{lat, lng}} = retornaPersona(persona);
  
  console.log(nombreClave,years);
  console.log(lat, lng);