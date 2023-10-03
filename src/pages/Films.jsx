import NewsFeed from "../components/NewsFeed";


const Films = () => {
  const name="entertainment"
  return (
    <div>
      <h1 className="text-3xl text-center">Films</h1>
      <NewsFeed category={name}/>
    </div>
  );
}

export default Films