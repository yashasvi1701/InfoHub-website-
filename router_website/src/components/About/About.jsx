import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components. It is maintained by
              Meta (formerly Facebook) and a community of individual developers
              and companies. React can be used to develop single-page, mobile,
              or server-rendered applications with frameworks like Next.js.
            </p>
            <p className="mt-4 text-gray-600">
              ReactJS's primary goal is to create User Interfaces (UI) which
              enhance the speed of programs. It makes use of virtual DOM
              (JavaScript object), which enhances the app's efficiency. Quicker
              than the standard DOM is the JavaScript virtual DOM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
