import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section class=" w-11/12 m-10 shadow-xl border-2 rounded bg-white  text-gray-600 body-font">
      <div className="container mt-14">
        <h1 className="text-center text-4xl font-bold items-center">Blog</h1>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap ">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://www.italianbark.com/wp-content/uploads/2020/07/interior-trends-new-minimalist-style-history-cover.jpg"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  lifestyle
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Why minimalism a lifestyle
                </h1>
                <p class="leading-relaxed mb-3">
                  If you've ever heard of minimalism, you probably have a good
                  idea of what it's about. But you might be wondering how
                  someone would implement minimalism in their life. I'm going to
                  break it down for you.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link to="/blog-page">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Read more
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
