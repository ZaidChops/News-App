import cryfetch from "./cryptoaction";

export const fetchNews = async (topic) => {
  const responce = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=2023-12-12&sortBy=publishedAt&apiKey=7d5ee67091684e15be2126cbdfb0112f`
  );
  const data = await responce.json();
  return data.articles;
};


