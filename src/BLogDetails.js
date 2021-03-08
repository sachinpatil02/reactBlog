import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:4000/blogs/' + id);
  const history = useHistory();

  const handleClick = () =>{
      fetch('http://localhost:4000/blogs/' + blog.id, {
          method: 'DELETE'
      }).then(()=>{
          history.push('/');
      })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h1>{ blog.title }</h1>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button class="btn btn-primary float-left me-md-3" onClick={handleClick}>Delete</button>
          <Link class="btn btn-primary float-left" to="/">Back</Link>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
