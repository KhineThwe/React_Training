import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState(null);


  useEffect(() => {
    setTimeout(() => {
        fetch("http://localhost:8000/blogs")
          .then((res) => {
            if (!res.ok) {
              // error coming back from server
              throw Error("could not fetch the data for that resource");
            }
            return res.json();
          })
          .then((res) => {
            setBlogs(res);
            setPending(false);
            setError(null);
          })
          .catch((error) => {
            console.log(error);
            setPending(false);
            setError(error.message);
          });
      }, 1000);
  }
  )

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>....Loading</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Home;
