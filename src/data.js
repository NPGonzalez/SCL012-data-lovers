//FUNCIÓN PARA MOSTRAR PERSONAJES
export const showValues = (POTTER)=>{
    let resultado = [ ];
  for (var i in POTTER){
    resultado +=`<div class ="card"><ul class='lista'><li>${POTTER[i].name}</li><li><img src = ${POTTER[i].image}></li></ul></div>`;
    /*<li><p>${POTTER[i].house}</p></li><li><p> ${POTTER[i].species}</p></li>*/
  }
  return resultado;
};

//FUNCIÓN PARA FILTRAR

export const filterData = (POTTER,characterByFilter) =>{
  let charactersFilter = POTTER.filter(function (POTTER) {
  if(characterByFilter=='All'){
    return showValues(POTTER);
  }
  else{
    if((characterByFilter == 'Gryffindor')||(characterByFilter == 'Slytherin')||(characterByFilter == 'Hufflepuff')||(characterByFilter == 'Ravenclaw' )){
      return POTTER.house == characterByFilter;
    }
    else{
      if((characterByFilter == 'human')||(characterByFilter == 'half-giant')||(characterByFilter == 'werewolf')||(characterByFilter == 'cat')){
        return POTTER.species == characterByFilter;
      }
      else{
        if((characterByFilter == 'male')|| (characterByFilter == 'female')){
          return POTTER.gender == characterByFilter;
        }
      }
    }
  }
});
return showValues(charactersFilter);
};

export const dataSort = (data, sortByNameOrder) => {

  let ordered = [];
  function sortByName(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    
  }
  if (sortByNameOrder == 'ascendent') {
    ordered = data.sort(sortByName);
  }
  else{
  if (sortByNameOrder == 'descendent') {
    ordered = data.sort(sortByName).reverse();
  }
}
  return showValues(ordered);

};


export const calculateAge = (POTTER) => {
};