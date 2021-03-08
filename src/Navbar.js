import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav className="navbar">
    //  <Link to="/"> <h1>The Dojo Blog</h1></Link>
    //   <div className="links">
    //     <Link to="/">Home</Link>
    //     <Link to="/create" style={{ 
    //       color: 'white', 
    //       backgroundColor: '#f1356d',
    //       borderRadius: '8px' 
    //     }}>New Blog</Link>
    //     <Link to="/about">About Us</Link>
    //   </div>
    // </nav>

  <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm ">
      <Link to="/" className="h5 my-0 me-md-auto fw-normal">Company name</Link>
      <nav className="my-2 my-md-0 me-md-3">
      <Link className="p-2 text-dark" to="/">Home</Link>
      <Link className="p-2 text-dark" to="/create">Creats Post</Link>
      <Link className="p-2 text-dark" to="/about">About Us</Link>
        <Link className="p-2 text-dark" href="#">Support</Link>
        <Link className="p-2 text-dark" href="#">Pricing</Link>
      </nav>
      <Link class="btn btn-outline-primary" href="#">Sign up</Link>
  </header>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#">Navbar</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/about">About</a>
    //       </li>
          
    //     </ul>
    //     <form className="form-inline my-2 my-lg-0">
    //       <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
    //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //     </form>
    //   </div>
    // </nav>

  );
}
 
export default Navbar;
