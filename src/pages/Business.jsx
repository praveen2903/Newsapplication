import NewsFeed from "../components/NewsFeed";

const Business = () => {
  const name="business";
  return (
    <div>
      <h1 className="text-3xl text-center">Business</h1>
      <NewsFeed category={name}/>
      
    </div>
  );
}

export default Business