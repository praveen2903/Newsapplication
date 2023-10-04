import NewsFeed from "../components/NewsFeed";


const Sports = () => {
  const name="sports"
  const id=5
  return (
    <div>
      <h1 className="text-3xl text-center">Sports</h1>
      <NewsFeed id={id} category={name}/>

    </div>
  );
}

export default Sports