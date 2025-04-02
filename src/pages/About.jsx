import React from "react";

const About = () => {
  return (
    <div className="text-center p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-2">12-Khomgrit-Ton</h1>
      <div className="flex w-3/6" >
      <img src="./src/4.png" alt="profile image" className="mt-4"/>
      <img src="./src/2.png" alt="profile image" className="mt-4"/>
      
      </div>
      <p className="font-bold text-gray-700 mt-8">
      "Self doubt and insecure".
      </p>
      <p> visuals maker, music lovers, and a passionate learner.</p>
    </div>
  );
};

export default About;
