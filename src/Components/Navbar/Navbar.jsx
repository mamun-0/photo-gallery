import Logo from "../../assets/brand.jpg";
import "./Navbar.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="rotating"
            style={{ height: 50, width: 50, borderRadius: `50%` }}
            src={Logo}
            alt="brand-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Animals
              </a>
            </li>
          </ul>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
