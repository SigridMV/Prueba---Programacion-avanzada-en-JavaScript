export let animales = (() => {
  // URL del archivo JSON que contiene los datos de los animales
  const url = '../../animales.json';

  const getData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('No se pudo obtener los datos');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  // Retorna un objeto con el método getData para ser utilizado externamente
  return { getData };
})();
