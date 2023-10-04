import NewsFeed from "../components/NewsFeed";

const Politics = () => {
  const name="health";
  const id=4;
  return (
    <div>
      <h1 className="text-3xl text-center">Health</h1>
      <NewsFeed id={id} category={name}/>
      
    </div>
  );
}

export default Politics