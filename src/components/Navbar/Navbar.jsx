import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import MyLogo from "../images/Framework_Computer_logo.svg";
import LoginWidget from "../LoginWidget/LoginWidget";

const Navbar = () => {
  return (
    <>
      <div>
        {/* Navigation --> */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light m-3">
          <div className="container rounded-4">
            <Link className="navbar-brand" to="/">
              <img src={MyLogo} alt="" width="200" height="80" />
            </Link>
            <div style={{ float: "center" }}>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto text-center fs-5">
                <li className="nav-item">
                  <Link className="nav-link" to="/category/rick_and_morty">
                    Rick & Morty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/star_wars">
                    Star Wars
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ofertas">
                    Ofertas Lighting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <LoginWidget />
            <CartWidget />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
