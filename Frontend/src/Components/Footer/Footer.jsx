import React from "react";

function Footer() {
  return (
    <>
      <div className=" bg-dark container-fluid">
        <div className="row">
          <div className="col-12">
            <footer className=" text-white pt-4 ">
              <div className="row">
                {/* About Section */}
                <div className="col-md-4">
                  <h5>About Us</h5>
                  <p>
                    Providing quality services and solutions for all your needs.
                    We are dedicated to delivering the best experience.
                  </p>
                </div>
                {/* Quick Links */}
                <div className="col-md-4">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-white text-decoration-none">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-decoration-none">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-decoration-none">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-decoration-none">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Social Media */}
                <div className="col-md-4">
                  <h5>Follow Us</h5>
                  <a href="#" className="text-white me-3">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="text-white me-3">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="text-white me-3">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="text-white">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>

                <hr className="bg-light" />
                {/* Copyright */}
                <div className="text-center pb-3">
                  <p className="mb-0">
                    © 2025 Your Company. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      />
    </>
  );
}

export default Footer;
