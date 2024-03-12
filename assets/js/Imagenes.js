//Función asincrónica 
export async function cargarImagen(ruta) {
  try {
    const response = await fetch(ruta);
    if (!response.ok) {
      throw new Error('No se pudo cargar la imagen');
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(error);
    return null;
  }
}
