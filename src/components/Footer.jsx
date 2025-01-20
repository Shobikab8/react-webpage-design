import React from "react";

const Footer = () => {
  return (
    <footer className="bd-footer pt-5 py-2 mt-5">
      <div className="container py-5 footer-link text-start">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <p className="footer-p">Product</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Overview</a>
              </li>
              <li className="mb-2">
                <a href="#">Features</a>
              </li>
              <li className="mb-2">
                <a href="#">Solutions</a>
              </li>
              <li className="mb-2">
                <a href="#">Tutorials</a>
              </li>
              <li className="mb-2">
                <a href="#">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#">Releases</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <p className="footer-p">Company</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">About us</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#">Press</a>
              </li>
              <li className="mb-2">
                <a href="#">News</a>
              </li>
              <li className="mb-2">
                <a href="#">Media kit</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <p className="footer-p">Resources</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Newsletter</a>
              </li>
              <li className="mb-2">
                <a href="#">Events</a>
              </li>
              <li className="mb-2">
                <a href="#">Help centre</a>
              </li>
              <li className="mb-2">
                <a href="#">Tutorials</a>
              </li>
              <li className="mb-2">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <p className="footer-p">Use cases</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Startups</a>
              </li>
              <li className="mb-2">
                <a href="#">Enterprise</a>
              </li>
              <li className="mb-2">
                <a href="#">Government</a>
              </li>
              <li className="mb-2">
                <a href="#">SaaS centre</a>
              </li>
              <li className="mb-2">
                <a href="#">Marketplaces</a>
              </li>
              <li className="mb-2">
                <a href="#">Ecommerce</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <p className="footer-p">Social</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="#">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#">GitHub</a>
              </li>
              <li className="mb-2">
                <a href="#">AngelList</a>
              </li>
              <li className="mb-2">
                <a href="#">Dribbble</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <p className="footer-p">Legal</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Terms</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="#">Cookies</a>
              </li>
              <li className="mb-2">
                <a href="#">Licenses</a>
              </li>
              <li className="mb-2">
                <a href="#">Settings</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center align-items-sm-start mx-5">
        <a
          href="/"
          className="mb-2 mb-lg-0 "
        >
          <img id="logo" src="src\assets\Vector.svg" />
        </a>
        <small className="mb-3 text-muted">© 2077 zysktechnologies. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
