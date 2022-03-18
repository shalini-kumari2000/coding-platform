import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PostCard } from "../components/Post";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function FeaturedPosts({ posts }) {
  //   const [featuredPosts, setFeaturedPosts] = useState([]);
  //   const [dataLoaded, setDataLoaded] = useState(false);

  //   useEffect(() => {
  //     getFeaturedPosts().then((result) => {
  //       setFeaturedPosts(result);
  //       setDataLoaded(true);
  //     });
  //   }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <div className="mb-8">
      {posts && posts.length ? (
        <div>
          <h2 className="text-2xl font-bold mb-3">Featured Posts</h2>
          <Carousel
            infinite
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
            responsive={responsive}
            itemClass="px-4 py-2"
          >
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </Carousel>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
