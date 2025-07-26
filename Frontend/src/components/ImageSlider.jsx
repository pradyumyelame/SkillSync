// import React, { useState } from "react";
// import { SliderData } from "./SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className="slider">
//       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
//       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <img src={slide.image} alt="travel image" className="image" />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default ImageSlider;

// import React, { useState } from "react";
// import { SliderData } from "./SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <div className="flex h-600 relative">
//       {/* Left Content (2/3 width) */}
//       <div className="flex-2 bg-gray-200 p-8">
//         <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
//         <p className="text-gray-600">
//           Our resume builder application is designed to make the job of creating
//           a professional resume easy and efficient. Here's why you should choose
//           our application:
//         </p>
//         <ul className="list-disc pl-5 mt-3">
//           <li>Intuitive and User-Friendly Interface</li>
//           <li>Wide Range of Professionally Designed Templates</li>
//           <li>Customization Options to Personalize Your Resume</li>
//           <li>Real-Time Previews for Immediate Feedback</li>
//           <li>Expert Guidance and Tips for Effective Resume Writing</li>
//         </ul>
//       </div>

//       {/* Right Panel (1/3 width) */}
//       <div className="flex-1 bg-gray-300 relative">
//         <section className="relative h-full">
//           {SliderData.map((slide, index) => (
//             <div
//               className={index === current ? "slide active" : "slide hidden"}
//               key={index}
//             >
//               {index === current && (
//                 <img
//                   src={slide.image}
//                   alt={`slide ${index}`}
//                   className="object-cover w-full h-full"
//                 />
//               )}
//             </div>
//           ))}
//         </section>

//         <FaArrowAltCircleLeft
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 text-yellow-400 cursor-pointer"
//           onClick={prevSlide}
//         />
//         <FaArrowAltCircleRight
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 text-yellow-400 cursor-pointer"
//           onClick={nextSlide}
//         />
//       </div>
//     </div>
//   );
// };

// 2nd one export default ImageSlider;
// import React, { useState } from "react";
// import { SliderData } from "./SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <div className="flex h-600 mx-4 gap-5">
//       {/* Left Content (2/3 width) */}
//       <div className="flex-2 bg-gray-200 p-8 rounded-xl">
//         <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
//         <p className="text-gray-600">
//           Our resume builder application is designed to make the job of creating
//           a professional resume easy and efficient. Here's why you should choose
//           our application:
//         </p>
//         <ul className="list-disc pl-5 mt-3">
//           <li>Intuitive and User-Friendly Interface</li>
//           <li>Wide Range of Professionally Designed Templates</li>
//           <li>Customization Options to Personalize Your Resume</li>
//           <li>Real-Time Previews for Immediate Feedback</li>
//           <li>Expert Guidance and Tips for Effective Resume Writing</li>
//         </ul>
//       </div>

//       {/* Right Panel (1/3 width) */}
//       <div className="flex-1  relative h-full bg-gray-900">
//         <section className="relative h-full overflow-hidden rounded-lg">
//           {SliderData.map((slide, index) => (
//             <div
//               className={index === current ? "slide active" : "slide hidden"}
//               key={index}
//             >
//               {index === current && (
//                 <img
//                   src={slide.image}
//                   alt={`slide ${index}`}
//                   className="object-cover w-full h-full rounded-lg"
//                 />
//               )}
//             </div>
//           ))}
//         </section>

//         <FaArrowAltCircleLeft
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white-400 cursor-pointer"
//           onClick={prevSlide}
//         />
//         <FaArrowAltCircleRight
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white-400 cursor-pointer"
//           onClick={nextSlide}
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="flex h-full mx-4 gap-5 mb-20">
      {/* Left Content (2/3 width) */}
      <div className="flex-2 bg-teal-100 p-8 rounded-xl h-1/2">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <p className="text-gray-900">
          Our resume builder application is designed to make the job of creating
          a professional resume easy and efficient. Here's why you should choose
          our application:
        </p>
        <ul className="list-disc pl-5 mt-3">
          <li>Intuitive and User-Friendly Interface</li>
          <li>Wide Range of Professionally Designed Templates</li>
          <li>Customization Options to Personalize Your Resume</li>
          <li>Real-Time Previews for Immediate Feedback</li>
          <li>Expert Guidance and Tips for Effective Resume Writing</li>
        </ul>
      </div>

      {/* Right Panel (1/3 width) */}
      <div className="flex-1  relative h-full bg-teal-900">
        <section className="relative h-full overflow-hidden rounded-lg">
          {SliderData.map((slide, index) => (
            <div
              className={index === current ? "slide active" : "slide hidden"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt={`slide ${index}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ImageSlider;
