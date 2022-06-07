import React from "react";
import Back from "../../utils/backBtn";
import About from "../about/about";
import Projects from "../about/proyects/proyects";

const Experiencia = () => {
  return (
    <div>
      <About />

      <section className=" bg-white  body-font">
        <div className=" pt-14">
          <h1 className="text-center text-4xl font-bold items-center">
            EXPERIENCE
          </h1>
        </div>
        <div className="w-full px-5 py-24 mx-auto flex flex-wrap">
          <Back />
          <div className="flex relative pt-0 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center"></div>

            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Full-Stack - Air Computers [2020-2022]
                </h2>
                <p className="leading-relaxed">
                  I develop projects in Node, Express, Next.js, Strapi, Rest API
                  services. Wordpress management, development of landings,
                  mails, and other services. SCRUM metodology.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  JavaScript Mentor - In coderhouse.com <br></br>[2021 -
                  current] (part-time)
                </h2>
                <p className="leading-relaxed">
                  I teach classNamees and provide tutoring on the Coder- house
                  platform.
                </p>

                <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                        Web developer - as Freelancer [2019 - current]{" "}
                      </h2>
                      <p className="leading-relaxed">
                        I work with a portfolio of own clients. Giving them
                        services as a web developer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Projects />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Experiencia;
