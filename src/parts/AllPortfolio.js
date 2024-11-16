/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const FoodPortfolio = ({ data }) => {
  // Filter items by type
  const sauces = data.filter((item) => item.type === "Sauces");
  const mayonnaise = data.filter((item) => item.type === "Mayonnaise");
  const chutneys = data.filter((item) => item.type === "Chutneys and Paste");

  return (
    <div className="container mx-auto p-4">
      <Tabs className="flex flex-col">
        <TabList className="flex flex-wrap gap-4 mb-8">
          <Tab className="cursor-pointer outline-none">
            <button className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors">
              Sauces
            </button>
          </Tab>
          <Tab className="cursor-pointer outline-none">
            <button className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors">
              Mayonnaise
            </button>
          </Tab>
          <Tab className="cursor-pointer outline-none">
            <button className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors">
              Chutneys & Paste
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sauces.map((item) => (
              <div
                key={item.id}
                className="group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative aspect-square">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
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
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mayonnaise.map((item) => (
              <div
                key={item.id}
                className="group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
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
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chutneys.map((item) => (
              <div
                key={item.id}
                className="group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
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
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default FoodPortfolio;
