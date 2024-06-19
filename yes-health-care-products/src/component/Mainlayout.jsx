// src/components/Mainlayout.jsx

import React, { useRef, useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Mainlayout = ({ data }) => {
  const scrollRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Calculate the number of visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 4; // large screens
    if (window.innerWidth >= 768) return 3; // medium screens
    return 1; // small screens
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visibleCards on window resize
  const handleResize = () => {
    setVisibleCards(getVisibleCards());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollRight = () => {
    const newIndex = startIndex + visibleCards;
    if (newIndex >= data.length) {
      setStartIndex(0);
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      setStartIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 280, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    const newIndex = startIndex - visibleCards;
    if (newIndex < 0) {
      const lastIndex = data.length - visibleCards;
      setStartIndex(lastIndex >= 0 ? lastIndex : 0);
      scrollRef.current.scrollTo({ left: lastIndex * 280, behavior: "smooth" });
    } else {
      setStartIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 280, behavior: "smooth" });
    }
  };

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="relative">
      {/* Scroll left button */}
      <button
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 ${
          data.length <= visibleCards ? "hidden" : ""
        }`}
        onClick={handleScrollLeft}
      >
        <FaAngleLeft className="text-gray-600" />
      </button>

      {/* Scroll right button */}
      <button
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 ${
          data.length <= visibleCards ? "hidden" : ""
        }`}
        onClick={handleScrollRight}
      >
        <FaAngleRight className="text-gray-600" />
      </button>

      {/* Horizontal scrollable container */}
      <div
        className="flex space-x-4 p-4 overflow-x-auto"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {data
          .slice(startIndex, startIndex + visibleCards)
          .map((item, index) => (
            <div
              key={index}
              className={`w-64 bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 ${
                hoveredIndex === index ? "scale-110" : ""
              }`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Mainlayout;
