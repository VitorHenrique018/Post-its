import api from '../Api/api'

export const getPosts = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/search");
    summary = data;
  } catch (error) {
    alert("Ocorreu um erro ao buscar os items");
  }
  return summary;
}


export const createPost = async (params) => {
  let summary = [];
  const obj = {
    title: params.title,
    description: params.description
  }
  try {
    const { data } = await api.post("/newposts", JSON.stringify(obj), { headers: { 'Content-Type': 'application/json' } });
    summary = data;
  } catch (error) {
    alert("Ocorreu um erro ao cadastrar os items");
  }
  return summary;
}

export const deletePost = async (params) => {
  let summary = [];
  try {
    const { data } = await api.delete(`/posts/${params}`);
    summary = data;
  } catch (error) {
    alert("Ocorreu um erro ao excluir o artigo");
  }
  return summary;
}