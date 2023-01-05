import React from "react";
import "./Review.css";
import reviewimg from "../Images/review-img.png";

export const Review = () => {
  return (
    <>
      <section class="review">
        <div class="review-flex">
          <div class="review-img">
            <img src={reviewimg} alt="review" />
          </div>

          <div class="review-text">
            <h5>OVER 3 MILLION REVIEWS</h5>

            <p class="quote">
              "Such a great community to be part of. The commitment and services
              you all provide to the community is just outstanding."
            </p>

            <div class="client-info">
              <p class="name">Jimoh Lawal</p>
              <p class="date">Wedding 6/8/19</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
