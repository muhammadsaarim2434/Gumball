
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark-black">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src="/Logo.svg" className="img-fluid" alt="Logo" width={120} height={40} />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link font_sb fw-bold text-white me-3 active bg-nav rounded-pill px-4 py-2" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font_sb text-white me-3 active" href="#">
                Our Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font_sb text-white me-3 active" href="#">
                Who We Are
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font_sb text-white me-3 active" href="#">
                The Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font_sb text-white me-3 active" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn text-black font_sb button_cm rounded-pill px-4 py-2" type="submit">
            Start Project
          </button>
        </div>
      </div>
    </nav>
  );
}
