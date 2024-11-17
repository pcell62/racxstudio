import Header from "parts/Header";
import React from "react";
import Footer from "parts/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 ">
        <div className="container mx-auto px-4 flex flex-wrap items-start">
          <div className="md:ml-40">
            <div className="text-center max-w-lg mx-auto mb-12">
              <h2 className="text-4xl font-semibold text-gray-800">
                Crafting Quality Sauces for Every Business Need
              </h2>
              <p className="text-gray-600">
                We are dedicated to creating premium sauces, condiments, and
                mayonnaise, tailored to meet the diverse needs of food
                businesses worldwide. From flavorful classics to custom
                creations, our products are crafted with care and quality in
                every batch.
              </p>
            </div>
            <div className="text-center max-w-lg mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to bring flavor and convenience to the food
                industry by delivering high-quality sauces and condiments,
                backed by reliable service and innovative packaging solutions.
              </p>
            </div>
            <div className="text-center max-w-lg mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-gray-800">
                Why Choose Us
              </h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>
                  Custom Solutions: We offer flexibility in flavors and
                  packaging, providing both bulk solutions and ready-to-shelf
                  bottled products.
                </li>
                <li>
                  Quality Ingredients: Our commitment to quality starts with
                  sourcing the finest ingredients and maintaining rigorous
                  standards in every product.
                </li>
                <li>
                  B2B Expertise: With years of experience in the food
                  manufacturing industry, we understand the unique demands of
                  B2B clients and aim to exceed expectations with every order.
                </li>
              </ul>
            </div>

            <div className="text-center max-w-lg mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
              <p className="text-gray-600">
                We envision becoming a trusted partner for food businesses,
                helping them elevate their offerings with flavors crafted for
                every taste and need.
              </p>
            </div>
            <div className="text-center max-w-lg mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-gray-800">Join Us</h3>
              <p className="text-gray-600">
                Partner with us to bring exceptional sauces and condiments to
                your business, and let us help you serve the best to your
                customers.
              </p>
            </div>
          </div>
          <div className="text-center max-w-lg mx-auto mb-12 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-20">
              Meet Our Co-Founders
            </h3>
            <div className="md:flex justify-center space-x-8">
              <div className="text-center">
                <img
                  src="https://northwest.education/wp-content/uploads/2021/02/Blog-79-680x380.jpg"
                  alt="Co-Founder 1"
                  className="w-80 h-80 object-cover rounded-full mx-auto"
                />
                <p className="text-gray-800 mt-4">John Doe</p>
              </div>
              <div className="text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuquGRRrzrmHpwFzLN4sh6wfYzujAjryVpg&s"
                  alt="Co-Founder 2"
                  className="w-80 h-80 object-cover rounded-full mx-auto"
                />
                <p className="text-gray-800 mt-4">Jane Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
