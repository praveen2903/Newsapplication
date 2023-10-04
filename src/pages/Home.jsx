import NewsFeed from "../components/NewsFeed";

const Home = () => {
  const name="general";
  const id=3;
  return (
    <div>
      <h1 className="text-3xl text-center">Home</h1>
      <NewsFeed id={id} category={name}/>
      
    </div>
  );
}

export default Home