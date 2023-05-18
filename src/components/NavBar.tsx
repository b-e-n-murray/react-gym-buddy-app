import { Link } from "react-router-dom";

function NavBar(): JSX.Element {
  function comingSoonAlert() {
    alert("Feature coming soon!");
  }
  return (
    <>
      <nav className="navbar">
        <Link className="appHeader" to="/generator">
          <h1>Gym Buddy</h1>
        </Link>
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
            <Link className="nav-link" to="/set-tracker">
              Set/Rep Tracker
            </Link>
          </div>
          <div className="link-container">
            <Link className="nav-link" to="/stopwatch">
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
