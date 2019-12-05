import POTTER from './data/potter/potter.js';
import * as modulo from './data.js';

document.getElementById('buttonCharacter1').addEventListener("click", function(){
  let number = 0;
  const characteristicsCharacter1 = document.getElementById("characteristicsCharacter1");
  characteristicsCharacter1.innerHTML= modulo.showValues(POTTER,number);
}); 

//Filtrado selección
     let sortByHouse = document.getElementById('casa');
     sortByHouse.addEventListener('change', function(){
     // let select = document.getElementById('casa');
      let selectedOption = document.getElementById('characteresFilter');
      selectedOption.innerHTML= modulo.filterData(POTTER,sortByHouse.value);
  });