import NewsFeed from "../components/NewsFeed";

const Technology = () => {
  const id=6;
  const name="technology";
  return (
    <div>
      <h1 className="text-3xl text-center">Technology</h1>
      <NewsFeed id={id} category={name}/>
    </div>
  );
}

export default Technology