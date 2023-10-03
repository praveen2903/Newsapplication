import axios from "axios";
import { useEffect, useState } from "react";
import NewsFeed from "../components/NewsFeed";

const Films = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5dff31037ade4d979a51175cbed18e2e`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl text-center">Films</h1>
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

export default Films