async function cargarSonido(url) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    return objectURL;
  } catch (error) {
    console.error('Error al cargar el sonido:', error);
    return null;
  }
}

export { cargarSonido };
