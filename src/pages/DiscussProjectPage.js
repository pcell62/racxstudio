import React, { useState, useEffect } from "react";
import { DiscussForm } from "parts/DiscussForm";
import Header from "parts/Header";
import Footer from "parts/Footer";

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
    });
  };

  return (
    <>
      <Header />
      <div className="relative justify-center space-x-8 items-center">
        <div className="flex-1">
          <DiscussForm
            data={data}
            onChange={onChange}
            resetForm={resetForm}
            className=""
          />
        </div>
        <div className="flex justify-center items-center pb-10">
          <div className="sm:absolute sm:top-0 sm:right-20 ">
            <div className="text-2xl text-theme-purple">Our Location 👇👇</div>
            <iframe
              className=" rounded-xl shadow-2xl w-[250px] h-[250px] hover:w-[400px] hover:h-[400px] transition-all duration-500 ease-in-out"
              title="VR Foods Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15037.459958086918!2d72.8364083!3d19.5688578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7078e16964c25%3A0x11d958c6678e3320!2sVR%20FOODS!5e0!3m2!1sen!2sin!4v1731840179078!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
