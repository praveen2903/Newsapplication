import NewsFeed from "../components/NewsFeed";


const Sports = () => {
  const name="sports"
  return (
    <div>
      <h1 className="text-3xl text-center">Sports</h1>
      <NewsFeed category={name}/>

    </div>
  );
}

export default Sports