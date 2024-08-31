'use client';

import React from 'react';


import storyImage2 from "../public/our-story-2.jpg";

export const OurStory = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center items-center">
       
        <div className="w-full md:w-1/2 p-4" data-aos="fade-left" data-aos-duration="2000">
          <h3 className="text-3xl font-bold">
            OUR <span className="text-blue-500">STORY</span>
          </h3>
          <h1 className="text-5xl font-bold mt-2">
            Tell me your story
          </h1>
          <p className="mt-4 text-lg">
          Established in 2014, Moon River Thai is a restaurant located in the Business District of Danville, Virginia. 
          The restaurant prides itself on providing guests with an authentic taste of Thai cuisine, intimate atmosphere, 
          and impeccable customer service. 
          Whether you're a seasoned Thai food enthusiast or trying it for the first time, the team at Moon River Thai is dedicated to ensuring that you have a memorable and enjoyable dining experience.
           Come and enjoy a taste of Thai in Southside Virginia!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
