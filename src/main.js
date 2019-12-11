import POTTER from './data/potter/potter.js';
import * as modulo  from './data.js';

//LLAMADO FUNCIÓN MOSTRAR DATOS
window.onload = function() {
  //document.getElementById("results").innerHTML= modulo.showValues(POTTER);
  document.getElementById('results').innerHTML = modulo.dataSort(POTTER,'ascendent');
};




//LLAMADO FUNCIÓN DE FILTRADO POR CASA
document.getElementById('houses').addEventListener('change', function(){
   document.getElementById('results').value='';
   document.getElementById('results').innerHTML = modulo.filterData(POTTER,document.getElementById('houses').value);
});

//LLAMADO FUNCIÓN DE FILTRADO POR ESPECIE
document.getElementById('characterSpecies').addEventListener('change', function(){
   document.getElementById('results').value='';
   document.getElementById('results').innerHTML = modulo.filterData(POTTER,document.getElementById('characterSpecies').value);
});

//LLAMADO FUNCIÓN DE FILTRADO POR GÉNERO
document.getElementById('characterGender').addEventListener('change', function(){
   document.getElementById('results').value='';
   document.getElementById('results').innerHTML = modulo.filterData(POTTER,document.getElementById('characterGender').value);
});
 
//LLAMADO FUNCIÓN PARA ORDENAR
document.getElementById('sortCharacters').addEventListener('change', function(){
document.getElementById('results').innerHTML = modulo.dataSort(POTTER,document.getElementById('sortCharacters').value);
});
  



