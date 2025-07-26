// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import "../App.css";

// const SlickImgSlide = ({ slidess }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   function CustomNextArrow({ onClick }) {
//     return (
//       <div className="slick-arrow next" onClick={onClick}>
//         &rarr; {/* Right arrow */}
//       </div>
//     );
//   }

//   function CustomPrevArrow({ onClick }) {
//     return (
//       <div className="slick-arrow prev" onClick={onClick}>
//         &larr; {/* Left arrow */}
//       </div>
//     );
//   }

//   return (
//     <Slider {...settings} className="slick-container">
//       {slidess.map((slide) => (
//         <div key={slide.name} className="slick-slide">
//           <div className="bg-white h-fit text-black rounded-xl gap-6 object-cover">
//             <div className="h-fit bg-gray-700 flex justify-center items-center rounded-t-xl">
//               <img
//                 src={slide.img}
//                 alt=""
//                 className="h-fit w-full object-cover rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default SlickImgSlide;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const SlickImgSlide = ({ slidess }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true, // Added autoplay property
    autoplaySpeed: 1000, // Set the autoplay speed in milliseconds (e.g., 3000ms or 3s)
  };

  function CustomNextArrow({ onClick }) {
    return (
      <div className="slick-arrow next" onClick={onClick}>
        &rarr; {/* Right arrow */}
      </div>
    );
  }

  function CustomPrevArrow({ onClick }) {
    return (
      <div className="slick-arrow prev" onClick={onClick}>
        &larr; {/* Left arrow */}
      </div>
    );
  }

  return (
    <Slider {...settings} className="slick-container">
      {slidess.map((slide) => (
        <div key={slide.name} className="slick-slide">
          <div className="bg-white h-fit text-black rounded-xl gap-6 object-cover">
            <div className="h-fit bg-gray-700 flex justify-center items-center rounded-t-xl">
              <img
                src={slide.img}
                alt=""
                className="h-fit w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlickImgSlide;
