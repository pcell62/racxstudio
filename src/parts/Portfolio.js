/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

export default function Portfolio({ data }) {
  const [randomItems, setRandomItems] = useState([]);

  // Function to shuffle and pick 6 random items
  const getRandomItems = (items, count) => {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Initialize random items on component load
  useEffect(() => {
    setRandomItems(getRandomItems(data, 6));
  }, [data]);

  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Some of our Products
        </h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          We are ready to scale up your business with our great work result.
        </p>
      </Fade>

      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-6 justify-items-center">
        {randomItems.map((item, index) => (
          <Fade
            direction="up"
            triggerOnce
            bottom
            delay={500 * index}
            key={index}
          >
            <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-300 hover:scale-110 portofolio-card">
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-t-2xl z-0 object-fit w-full h-80"
                />
              </div>
              <div className="py-4">
                <h2 className="text-theme-blue text-center text-xl">
                  {item.title}
                </h2>
                <p className="font-light text-gray-400 text-center">
                  {item.type}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <Fade bottom triggerOnce>
        <Button
          href="/product"
          type="link"
          className="flex flex-grow-0 w-36 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 text-theme-purple px-5 border border-theme-purple items-center mt-14 rounded-full justify-center transition duration-300 hover:bg-theme-purple hover:text-white"
        >
          <p className="font-normal py-3 lg:text-lg xl:text-base">See More</p>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <svg
            className="w-4 h-4 -ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </Fade>
    </section>
  );
}
