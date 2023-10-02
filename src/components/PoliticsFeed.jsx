import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "./NewsFeed";
const PoliticsFeed = () => {
  const [articles, setArticels] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=844ec1ea386546de99d06bc9e1a1a943`
      );
      setArticels(response.data.articles);
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

export default PoliticsFeed;