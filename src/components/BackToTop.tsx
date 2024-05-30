import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Set up event listener for scroll events
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    // Container for the button, fixed at the bottom-left of the viewport
    <div className="fixed bottom-5 right-5 animate-pulse">
      {isVisible && (
        // Button to scroll back to the top
        <button
          onClick={scrollToTop}
          className="rounded bg-black p-2 text-white shadow transition-opacity hover:bg-gray-700"
        >
          ↑ Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTop;
