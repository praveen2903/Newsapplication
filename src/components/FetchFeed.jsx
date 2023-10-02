
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "./NewsFeed";
const FetchFeed = () => {
const [articles, setArticels] = useState([]);
useEffect(() => {
    const getArticles = async () => {
    const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=cdf1a1388df548748311ad11ad33c337`
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
  
  export default FetchFeed;