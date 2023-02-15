import { Link } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <div className="link-container">
          <Link className="nav-link" to="/generator">
            Workout Generator
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
