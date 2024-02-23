import React from "react";
import whole from "./whole.png";
import './Cards.css'

function Cards() {
  return (
    <div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-9">
              <div class="card">
                <img src={whole} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <h2>...</h2>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="">
                    <div>
                      <img src="https://image.com" alt="Img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col d-md-block">2 of 2</div>
          </div>

          <div class="card mt-5">
                <img src={whole} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <h2>...</h2>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="">
                    <div>
                      <img src="https://image.com" alt="Img" />
                    </div>
                  </div>
                </div>
              </div>

        </div>
      </div>
    </div>
  );
}

export default Cards;
