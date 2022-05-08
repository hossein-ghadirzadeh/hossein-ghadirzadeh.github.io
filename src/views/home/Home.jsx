import React from "react";
import AppContainer from "../../components/AppContainer";

const Home = () => {
  return (
    <AppContainer>
      <div className="my-20">
        <span
          className="
          box-decoration-clone
          text-white 
          font-sans 
          text-2xl 
          font-medium subpixel-antialiased bg-gradient-to-r from-cyan-500 to-blue-500 
          hover:from-pink-500 hover:to-yellow-500 
          rounded 
          px-2
          "
        >
          Welcome to my Personal website
        </span>
        <p className="w-1/2 indent-4 text-base subpixel-antialiased mt-3 leading-7">
          I’m Hossein, I am a React Developer with over 4+ years of experience
          with a demonstrated history of working in the computer software
          industry. Astute and deadline-driven, with a strong understanding of
          programming principles coupled with creative ideas. Fast learner,
          ready to take on new challenges, and Enthusiastic about new
          technologies.
        </p>
      </div>
    </AppContainer>
  );
};

export default Home;
