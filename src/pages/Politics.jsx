import axios from "axios";
import { useEffect, useState } from "react";
import NewsFeed from "../components/NewsFeed";


const Politics = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=5a76da2a216f4b0f81027dbcbd668bcb`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl text-center">Politics</h1>
      {articles.map((article) => {
        return (
          <NewsFeed
            key={article.url}
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

export default Politics