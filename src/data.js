//FUNCIÓN PARA MOSTRAR PERSONAJES
export let showValues= (personaje)=>{
  let allCharactersPotter=[];
    for(let i=0; i<=(personaje.length-1); i++){ 
        personajesPotter[i]=personaje[i].name +  personaje[i].house +  personaje[i].ascentry+  personaje[i].species;
      };   
      allCharactersPotter=personajesPotter.join('');
    return allCharactersPotter;
};


//FUNCIÓN FILTRADO DE PERSONAJES POR CASA
export const filterData = (POTTER,sortBy)=>{
  let filterCharacters;
  let j=-1;
  let nameCharactersPotter=[];
  let houseCharactersPotter=[];


if(sortBy=='Todos'){ //SE MUESTRAN TODOS LOS PERSONAJES Y SUS CARACTERÍSTICAS CUANDO EL SELECTOR ESTÁ EN  TODOS
  for(let i=0; i<=(POTTER.length-1); i++){ 
    //personajesPotter[i]=POTTER[i].name +  POTTER[i].house +  POTTER[i].ascentry+  POTTER[i].species;
    nameCharactersPotter[i]=POTTER[i].name;
    houseCharactersPotter[i]=POTTER[i].house;
         };   
}
else{ //SE MUESTRAN TODOS LOS PERSONAJES Y SUS CARACTERÍSTICAS CUANDO EL SELECTOR ESTÁ EN ALGUNA DE LAS CUATRO CASAS
for(let i=0; i<=(POTTER.length-1); i++){
  j++;
  if(POTTER[i].house==sortBy){
    nameCharactersPotter[j]=POTTER[i].name ;
   }
};

};
filterCharacters= nameCharactersPotter.join(''); 
return (filterCharacters);

};

