import { Link } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <div className="all-nav-links">
          <div className="link-container">
            <Link className="nav-link" to="/generator">
              Home
            </Link>
          </div>
          <div className="link-container">
            <Link className="nav-link" to="/generator">
              Workout Generator
            </Link>
          </div>
          <div className="link-container">
            <Link className="nav-link" to="/generator">
              Set/Rep Tracker
            </Link>
          </div>
          <div className="link-container">
            <Link className="nav-link" to="/generator">
              Stopwatch
            </Link>
          </div>
          <div className="link-container">
            <Link className="nav-link" to="/generator">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
