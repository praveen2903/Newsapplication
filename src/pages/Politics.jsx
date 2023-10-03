import NewsFeed from "../components/NewsFeed";

const Politics = () => {
  const name="politics";
  return (
    <div>
      <h1 className="text-3xl text-center">Politics</h1>
      <NewsFeed category={name}/>
      
    </div>
  );
}

export default Politics