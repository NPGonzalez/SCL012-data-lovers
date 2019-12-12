//  FUNCIÓN PARA FILTRAR POR CASA
export const filterDataHouse = (dataForFilter, charByFilter) => {
  if (charByFilter === 'All') {
    return dataForFilter;
  }
  const charactersFiltered = dataForFilter.filter((element) => element.house === charByFilter);
  return charactersFiltered;
};
//  FUNCIÓN PARA FILTRAR POR ESPECIE
export const filterDataSpecies = (dataForFilter, charByFilter) => {
  if (charByFilter === 'All') {
    return dataForFilter;
  }
  const charactersFiltered = dataForFilter.filter((element) => element.species === charByFilter);
  return charactersFiltered;
};
//  FUNCIÓN PARA FILTRAR POR GÉNERO
export const filterDataGender = (dataForFilter, charByFilter) => {
  if (charByFilter === 'All') {
    return dataForFilter;
  }
  const charactersFiltered = dataForFilter.filter((element) => element.gender === charByFilter);
  return charactersFiltered;
};
// FUNCIÓN PARA ORDENAR DATA
export const dataSort = (data, sortByNameOrder) => {
  let ordered = [];
  const sortByName = (a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  };
  if (sortByNameOrder === 'ascendent') {
    ordered = data.sort(sortByName);
  } else {
    ordered = data.sort(sortByName).reverse();
  }
  return ordered;
};
