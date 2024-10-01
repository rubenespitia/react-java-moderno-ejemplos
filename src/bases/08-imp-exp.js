//import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes';

//console.log(heroes);
//console.log(owners);

export const getHeroesById = (id) => {
  const found = heroes.find((element) => element.id === id)
  return found;
}

//console.log(getHeroesById(2));

export const constHeroesByOwner = (owner) =>
  {
   const result = heroes.filter((heroe) => heroe.owner === owner);
    return result;
  } 

//console.log(constHeroesByOwner('DC'));