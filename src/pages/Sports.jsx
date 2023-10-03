import { useEffect, useState } from "react";
import NewsFeed from "../components/NewsFeed";
import axios from "axios";

const Sports = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ba4304b5f78f4ed1b24c2290d82e24bc`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  
  return (
    <div>
      <h1>Sports</h1>
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
}

export default Sports