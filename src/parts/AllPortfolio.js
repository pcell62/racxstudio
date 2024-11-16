/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";
// prettier-ignore
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from "react-tabs";
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
          <Tab className="rounded-full cursor-pointer outline-none">
            <button className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors">
              Sauces
            </button>
          </Tab>
          <Tab className="rounded-full cursor-pointer outline-none">
            <button className="px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transition-colors">
              Mayonnaise
            </button>
          </Tab>
          <Tab className="rounded-full cursor-pointer outline-none">
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
                className="group relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
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
                {/* Packaging Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <ul className="text-white text-center space-y-2">
                    {item.packaging.map((pack, index) => (
                      <li key={index} className="text-xl">
                        {pack}
                      </li>
                    ))}
                  </ul>
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
                className="group relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
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
                {/* Packaging Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <ul className="text-white text-center space-y-2">
                    {item.packaging.map((pack, index) => (
                      <li key={index} className="text-xl">
                        {pack}
                      </li>
                    ))}
                  </ul>
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
                className="group relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
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
                {/* Packaging Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <ul className="text-white  text-center space-y-2">
                    {item.packaging.map((pack, index) => (
                      <li key={index} className="text-xl">
                        {pack}
                      </li>
                    ))}
                  </ul>
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
