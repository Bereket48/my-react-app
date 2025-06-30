import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SingleAppleProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/iphones/") 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(() => console.log(`Error: unable to fetch!`));
  }, []);
  console.log(products);
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          <br />
          <br />

          {products.map((product, index) => {
            return (
              <div
                key={product.Product_ID}
                className="row my-5 align-items-center"
              >
                <div
                  className={`col-md-6 text-md-start text-center order-${
                    index % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <div className="title-wraper bold black">
                    {product.Product_name}
                  </div>
                  <div>{product.Product_brief_description}</div>
                  <div>Starting at {product.Starting_price}</div>
                  <div>{product.Price_range}</div>
                  <div className="links-wrapper mt-2">
                    <ul className="list-unstyled">
                      <li>
                        <Link to={product.Product_url}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`col-md-6 text-center order-${
                    index % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div
                    className="d-flex justify-content-center align-items-center border border-secondary"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                      color: "#888",
                      fontSize: "1.1rem",
                    }}
                  >
                    Image Loading...
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SingleAppleProduct;
