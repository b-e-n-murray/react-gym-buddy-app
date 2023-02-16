import { Link } from "react-router-dom";

function NavBar(): JSX.Element {
  function comingSoonAlert() {
    alert("Feature coming soon!");
  }
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
            <Link
              className="nav-link"
              onClick={comingSoonAlert}
              to="/generator"
            >
              Set/Rep Tracker
            </Link>
          </div>
          <div className="link-container">
            <Link
              className="nav-link"
              onClick={comingSoonAlert}
              to="/generator"
            >
              Stopwatch
            </Link>
          </div>
          <div className="link-container">
            <Link
              className="nav-link"
              onClick={comingSoonAlert}
              to="/generator"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
