import React from 'react'
import card1 from "../../assets/img/card1.jpg";

function Menu() {
  return (
    <>
      <main>
              <div className="container ">
                <div className="row">
                  <div className="col-12 ">
                    <div className=" d-flex justify-content-center align-items-center ">
                      <h2 className="fw-bold" id="header-text">
                        <span className="text-orange">Delicious Menu</span>
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-4 my-3">
                        <div className="card" style={{ zindex: "-1" }}>
                          <img src={card1} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-danger">
                              Order
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4 my-3">
                        <div className="card">
                          <img src={card1} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-danger">
                              Order
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4 my-3">
                        <div className="card">
                          <img src={card1} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-danger">
                              Order
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
    </>
  )
}

export default Menu
