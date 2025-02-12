import React from "react";
import { FaLinkedin } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";
const TeamCard = (props) => {
  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-delay="50"
        className="md:w-72 mx-auto  rounded-lg md:shadow-lg overflow-hidden md:overflow-hidden flex flex-col justify-center items-center"
      >
        <div>
          <img
            className="object-center object-fill md:h-72 md:w-72 h-40 w-40 rounded-full md:rounded-none"
            src={props.data.image}
            alt="v"
            referrerPolicy="no-referrer"
          ></img>
        </div>
        <div className="text-center py-3 md:py-6">
          <p className="text-xl md:text-2xl text-gray-700 font-bold mb-1">
            {props.data.name}
          </p>
          <p className="text-base md:text-lg text-gray-500 font-normal">
            {props.data.role}
          </p>

          <p className=" mx-12 md:mx-28 flex items-center  justify-around mt-1  rounded-2xl">
            {/* <p className="sm:tracking-[0px]  text-sm tracking-[1.3px]  md:text-lg lg:text-xl uppercase py-1 text-blue-700 font-bold">Profile</p> */}
            <a target="_blank" href={props.data.linkedin} rel="noreferrer" > <FaLinkedin className=" text-blue-700  h-5 w-5 md:h-8 md:w-8" /></a>

          </p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;