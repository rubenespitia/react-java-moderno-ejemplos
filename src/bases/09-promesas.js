import {getHeroesById} from './bases/08-imp-exp'
/* const promesa = new Promise((resolve, reject)=>{

  setTimeout(() => {

    const heroe = getHeroesById(2);
    resolve(heroe); 
    console.log('2 Segundos Despues');
    //reject('Heroe no encontrado');
  }, 2000);

});

promesa.then((heroe)=> {
  console.log('heroe',heroe);
})
.catch(err => console.warn(err));*/

const getHeroesByIdAsync = (id) =>{
  return new Promise((resolve, reject)=>{

    setTimeout(() => {
  
      const heroe = getHeroesById(id);
      if(heroe){
        resolve(heroe);
      }else{
        reject('No se pudo encontrar al heroe');
      }
      //reject('Heroe no encontrado');
    }, 2000);
  
  });
}

getHeroesByIdAsync(4)
.then(console.log)
.catch(console.warn);