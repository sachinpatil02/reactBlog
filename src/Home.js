// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:4000/blogs')
  //     .then(res => {
  //       if (!res.ok) { // error coming back from server
  //         throw Error('could not fetch the data for that resource');
  //       } 
  //       return res.json();
  //     })
  //     .then(data => {
  //       setIsPending(false);
  //       setBlogs(data);
  //       setError(null);
  //     })
  //     .catch(err => {
  //       // auto catches network / connection error
  //       console.log(err.message);
  //       setIsPending(false);
  //       setError(err.message);
  //     })
  //   }, 1000);
  // }, []);

  const { data: blogs, isPending, error } = useFetch('http://localhost:4000/blogs')

  return (
    <div className="home">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
      </div>

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title = "All Blogs!" /> }
    </div>
  );
}
 
export default Home;
