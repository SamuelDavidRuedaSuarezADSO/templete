export const post = async (id) => {
  const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const resp = await rest.json();
  return resp
}