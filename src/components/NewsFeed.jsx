import React from "react";

const NewsFeed = ({ title, url, urlToImage, description,author }) => {
  return (
    <div className="grid place-items-center m-5 p-5 border rounded-lg shadow-md border-black bg-slate-500 text-white text-xl md:text-4xl hover:bg-blue-300">
      <a href={url}>
        <img className=" md:w-4/5 justify-center items-center rounded-lg" src={urlToImage} alt=""/>
        <div>
          <div className="md:text-xl underline mb-2">{title}</div>
          <div className="text-xs md:text-sm">{description}</div>
          <div className="text-xl text-red-500">{author}</div>
        </div>
      </a>
    </div>
  );
};

export default NewsFeed;