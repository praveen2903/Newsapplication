import NewsFeed from "../components/NewsFeed";

const Business = () => {
  const name="business";
  const id=1;
  return (
    <div>
      <h1 className="text-3xl text-center">Business</h1>
      <NewsFeed id={id} category={name}/>
      
    </div>
  );
}

export default Business