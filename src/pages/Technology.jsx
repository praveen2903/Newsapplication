import NewsFeed from "../components/NewsFeed";

const Technology = () => {

  const name="technology";
  return (
    <div>
      <h1 className="text-3xl text-center">Technology</h1>
      <NewsFeed category={name}/>
    </div>
  );
}

export default Technology