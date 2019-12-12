import POTTER from './data/potter/potter.js';
import * as modulo from './data.js';

const showValues = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data[i].name}</li><li><img src = ${data[i].image}></li></ul></div>`;
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

// LLAMADO FUNCIÓN DE FILTRADO POR GÉNERO
document.getElementById('characterGender').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.filterDataGender(POTTER, document.getElementById('characterGender').value));
});

// LLAMADO FUNCIÓN PARA ORDENAR
document.getElementById('sortCharacters').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.dataSort(POTTER, document.getElementById('sortCharacters').value));
});

