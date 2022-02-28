import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  /*
  get index from array and set it based on button clicks 
  */
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  //next button function
  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  //prev button function
  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };

  //random button function
  const randomPerson = () => {
    setIndex((index) => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber = index + 1;
      }
      return checkNumber(randomNumber);
    });
  };

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
          <button
            className="prev-btn"
            onClick={() => {
              prevPerson();
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              nextPerson();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="random-btn"
          onClick={() => {
            randomPerson();
          }}
        >
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
