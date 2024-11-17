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
      <div className="flex  space-x-8 px-8 py-4 items-center">
        <div className="flex-1">
          <DiscussForm
            data={data}
            onChange={onChange}
            resetForm={resetForm}
            className=""
          />
        </div>
        <div className="flex-1">
          <iframe
            className="mx-auto rounded-xl shadow-2xl mb-10"
            title="VR Foods Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15037.459958086918!2d72.8364083!3d19.5688578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7078e16964c25%3A0x11d958c6678e3320!2sVR%20FOODS!5e0!3m2!1sen!2sin!4v1731840179078!5m2!1sen!2sin"
            width="800"
            height="600"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
