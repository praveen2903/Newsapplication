import NewsFeed from "../components/NewsFeed";


const Films = () => {
  const name="entertainment"
  const id=2;
  return (
    <div>
      <h1 className="text-3xl text-center">Films</h1>
      <NewsFeed id={id} category={name}/>
    </div>
  );
}

export default Films