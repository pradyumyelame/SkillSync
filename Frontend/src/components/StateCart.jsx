import React from "react";

const StateCart = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font mb-20 mt-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Craft Your Perfect Resume with Our Builder
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Create a standout resume that showcases your skills and experiences.
            Our intuitive resume builder makes it easy to craft a
            professional-looking resume that gets noticed. Stand out from the
            crowd and land your dream job.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9" />
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                2.7K
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                1.3K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="1" width="18" height="22" rx="2" ry="2" />
                <path d="M12 5a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2zm0 6h4M6 18h12" />
              </svg>

              <h2 className="title-font font-medium text-3xl text-white">74</h2>
              <p className="leading-relaxed">Templates</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>

              <h2 className="title-font font-medium text-3xl text-white">
                4.6
              </h2>
              <p className="leading-relaxed">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateCart;
