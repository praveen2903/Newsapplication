import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "./NewsFeed";
const FilmsFeed = () => {
  const [articles, setArticels] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3f05685cd43947b58042017c85341816`
      );
      setArticels(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsFeed
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            author={article.author}
          />
        );
      })}
    </div>
  );
};

export default FilmsFeed;