export const comentarios = async () => {
  const solicitud = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comentairos = await solicitud.json();
  return comentairos;
}