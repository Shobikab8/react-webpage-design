import React, { useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <>
      <header className="p-2 mb-3 border-bottom">
        <div className="container">
          <div className="d-none d-md-flex flex-wrap align-items-center justify-content-between">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-md-0 link-body-emphasis text-decoration-none"
            >
              <img id="logo" src="src/assets/Vector.svg" alt="Logo" />
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 me-auto mx-3">
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  Home
                </a>
              </li>
              <div className="dropdown">
                <li>
                  <a
                    href="#"
                    className="nav-link px-3 d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
              <li>
                <div className="dropdown">
                  <a
                    href="#"
                    className="nav-link px-3 d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3 link-body-emphasis">
                  Pricing
                </a>
              </li>
            </ul>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="d-flex d-md-none justify-content-between align-items-center">
            <a
              href="/"
              className="d-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <img id="logo" src="src/assets/Vector.svg" alt="Logo" />
            </a>
            <button
              style={{border: "none", background: "none"}}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="bi bi-list" height={24}></i> 
            </button>
          </div>

          {menuOpen && (
            <div className="d-md-none mt-3">
              <ul className="nav flex-column" style={{fontSize: 15}}>
                <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-body-emphasis">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
