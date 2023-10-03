import { useEffect, useState } from "react";
import NewsFeed from "../components/NewsFeed";
import axios from "axios";


const Technology = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cfab0c3a07d74569bf447dc98d170f69`
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

export default Technology