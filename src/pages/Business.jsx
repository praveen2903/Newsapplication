import { useEffect, useState } from "react";
import axios from "axios";
import NewsFeed from "../components/NewsFeed";

const Business = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2265d216b99e46d895797bfc181a42cd`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl text-center">Business</h1>
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

export default Business