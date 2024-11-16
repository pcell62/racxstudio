/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";

export default function FeaturedProducts({ data }) {
  const [randomItems, setRandomItems] = useState([]);

  const getRandomItems = (items, count) => {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setRandomItems(getRandomItems(data, 6));
  }, [data]);

  return (
    <section className="container mx-auto px-4 py-16">
      <Fade direction="right" triggerOnce>
        <h1 className="text-4xl lg:text-5xl text-gray-800 text-center font-bold">
          Some of our Products
        </h1>
      </Fade>

      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-500 text-center mt-4 mb-12">
          We are ready to scale up your business with our great work result.
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {randomItems.map((item, index) => (
          <Fade direction="up" triggerOnce delay={500 * index} key={item.id}>
            <div className="group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative aspect-square">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white p-4">
                    <svg
                      className="w-12 h-12 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 text-center mt-1">
                  {item.type}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <Fade bottom triggerOnce>
        <div className="flex justify-center mt-12">
          <Button
            href="/product"
            type="link"
            className="group flex items-center gap-2 px-8 py-3 rounded-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
          >
            <span className="text-lg font-medium">See More</span>
            <div className="flex -space-x-2 transition-transform group-hover:translate-x-1">
              <svg
                className="w-5 h-5"
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
                className="w-5 h-5"
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
            </div>
          </Button>
        </div>
      </Fade>
    </section>
  );
}
