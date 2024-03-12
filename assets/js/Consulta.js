export let animales = (() => {
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

  return { getData };
})();
