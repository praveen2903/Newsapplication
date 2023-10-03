import axios from "axios";
import { useEffect, useState } from "react";

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
      <h1 className="text-3xl text-center">Home</h1>
      <div>
        {articles.map((article) => {
          return (
            <div className="grid justify-center place-items-center m-5 p-5 border rounded-lg shadow-md bg-slate-500 text-white text-xl md:text-4xl hover:bg-blue-300">
              <a href={article.url}>
                <img className=" md:w-4/5 justify-center items-center rounded-lg" src={article.urlToImage} alt=""/>
                  <div className="relative">
                    <div className="md:text-xl underline mb-2">{article.title}</div>
                    <div className="text-xs md:text-sm">{article.description}</div>
                    <div className="text-xl text-red-500">{article.author}</div>
                  </div>
              </a>
            </div>
          );
        })}
        
      </div>
      
    </div>
  );
}

export default Home