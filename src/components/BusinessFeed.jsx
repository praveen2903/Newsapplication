import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "./NewsFeed";
const BusinessFeed = () => {
  const [articles, setArticels] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2265d216b99e46d895797bfc181a42cd`
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

export default BusinessFeed;