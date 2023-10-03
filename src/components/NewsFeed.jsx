import axios from "axios";
import React, { useEffect, useState } from "react";

const NewsFeed = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5a76da2a216f4b0f81027dbcbd668bcb`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
};

export default NewsFeed;