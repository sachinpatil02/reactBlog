import { Link } from "react-router-dom";

const BlogList = ({ blogs,title }) => {
  return (
    // <div className="blog-list">
    //   <h1>{ title}</h1>
    //   {blogs.map(blog => (
    //     <div className="blog-preview" key={blog.id} >
    //       <Link to={ `/blogs/${blog.id}` }>
    //         <h2>{ blog.title }</h2>
    //         <p>Written by { blog.author }</p>
    //       </Link>
          
    //     </div>
    //   ))}
    // </div>

      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">

          {/* <!-- Home Post List -->*/}
          {blogs.map(blog => (
          <article className="post-preview" key={blog.id}>
            <Link to={ `/blogs/${blog.id}` }>
              <h2 className="post-title">{blog.title}</h2>              
              <h3 className="post-subtitle">{blog.subtitle}</h3>              
            </Link>
            <p className="post-meta">Posted by { blog.author }  on January 31, 2020 ·
            <span className="reading-time" title="Estimated read time"> 4 mins  read </span>              
            </p>
            <hr/>
          </article>
          
          ))}
    {/* <!-- Pager --> */}
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="/startbootstrap-clean-blog-jekyll/posts">View All Posts →</a>
          </div>

        </div>
      </div>
  );
}
 
export default BlogList;