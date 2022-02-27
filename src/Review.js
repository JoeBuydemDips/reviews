import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  /*
  get index from array and set it based on button clicks 
  */
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div button="button-container">
          <button className="prev-btn" onClick={() => {}}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => {}}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={() => {}}>
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
