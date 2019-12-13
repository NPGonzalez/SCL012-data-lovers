import POTTER from './data/potter/potter.js';
import * as modulo from './data.js';

const showValues = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li><img src = ${data[i].image}></li><li>${data[i].name}</li></ul></div><div id="charCharacters"><ul class='lista'><li><h3>${data[i].name}</h3></li><li><h4>${data[i].house}</h4></li><hr><li><b>Year of birth:</b> ${data[i].yearOfBirth}</li><li><b>Specie:</b> ${data[i].species}</li><li><b>Ancestry:</b> ${data[i].ancestry}</li><li><b>Patronus:</b> ${data[i].patronus}</li><hr><h4>Wand</h4> <li><b>Wood:</b> ${data[i].wand.wood}</li><li><b>Core:</b> ${data[i].wand.core}</li><li><b>Length:</b> ${data[i].wand.lang}</li><hr><li><b>Actor/Actress:</b> ${data[i].actor}</li></ul></div>`;
  }
};

// LLAMADO FUNCIÓN MOSTRAR DATOS
window.onload = () => {
  showValues(modulo.dataSort(POTTER, 'ascendent'));
};

// LLAMADO FUNCIÓN DE FILTRADO POR CASA
document.getElementById('houses').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.filterDataHouse(POTTER, document.getElementById('houses').value));
});

// LLAMADO FUNCIÓN DE FILTRADO POR ESPECIE
document.getElementById('characterSpecies').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.filterDataSpecies(POTTER, document.getElementById('characterSpecies').value));
});

// LLAMADO FUNCIÓN DE FILTRADO POR ASCENDENCIA
document.getElementById('characterAncestry').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.filterDataAncestry(POTTER, document.getElementById('characterAncestry').value));
});

// LLAMADO FUNCIÓN PARA ORDENAR
document.getElementById('sortCharacters').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.dataSort(POTTER, document.getElementById('sortCharacters').value));
});
