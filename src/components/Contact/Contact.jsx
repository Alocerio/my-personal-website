import React, { useState, useRef } from "react";
import Notiflix from "notiflix";
import Back from "../../utils/backBtn";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({});
  const [send, setSend] = useState(false);
  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      emailjs
        .sendForm(
          "service_7h2xlzs",
          "template_llv29xm",
          forms.current,
          "FRKgpjzGgjXyKTrdh"
        )
        .then((result) => {
          Notiflix.Notify.success("Thanks for your time!");
          setSend(true);
        });
    } else {
      Notiflix.Notify.warning("Fill all the fields!");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };*/

  const Formulario = () => {
    return (
      <>
        <Back />
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact me
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This is our first contact! Pleased to meet you :) <br></br> *Please
            leave me your message by filling out the following form and we will
            start as soon as possible.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={forms} onSubmit={sendEmail}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  {/* register your input into the hook by invoking the "register" function */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    *Email
                  </label>
                  {/* include validation with required or other standard HTML validation rules */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded border  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <input
                  className="flex mx-auto text-black font-bold border  py-2 px-8 focus:outline-none hover:bg-black hover:text-white rounded-md text-lg"
                  type="submit"
                />
              </div>

              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="text-indigo-500">leandrobordondev@gmail.com</p>
                <p className="leading-normal my-5 ">
                  From Rosario, Argentina to the World wide!
                </p>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };

  const Enviado = (props) => {
    return (
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <Back />

        <h1 className="sm:text-3xl text-5xl font-bold ">
          Your message has been sent successfully! 🚀
        </h1>
        <p></p>
      </div>
    );
  };
  return (
    <section className="bg-white body-font w-full relative">
      <div className=" px-5 py-24 mx-auto">
        <div id="form-container">
          {send ? <Enviado props={form} /> : <Formulario />}
        </div>
      </div>
    </section>
  );
};
export default Contact;
