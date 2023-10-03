import axios from "axios";
import { useEffect, useState } from "react";
import NewsFeed from "../components/NewsFeed";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=844ec1ea386546de99d06bc9e1a1a943`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  
  return (
    <div>
      <h1>Home</h1>
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

export default Home