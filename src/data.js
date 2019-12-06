//FUNCIÓN PARA MOSTRAR PERSONAJES
export const showValues= (POTTER)=>{ 

  POTTER.map(element => {
   Object.element+=
  `<img src = ${element.image}>
  <h1>${element.name }</h1> 
  <p>${element.house}</p> 
  <p> ${element.species}</p> `

  document.getElementById("characters").innerHTML=Object.element;
  console.log(element);

  }); 
};

//FUNCIÓN PARA FILTRAR POR CASA
export const filterData= (POTTER,characterByHouse)=>{ 

 if(characterByHouse!=="All"){
  let filtered = POTTER.filter(element => {element.house==characterByHouse });

  document.getElementById("characters").innerHTML=filtered;
 }
 else{
  document.getElementById("characters").innerHTML=[];
  showValues(POTTER);
}
     
  };

  
  