import React from "react";
import aboutImg from "../assets/images/about_img.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">
            Rounak Maurya, Mit Mayekar, Divyanshu Makharia
          </h1>
        </div>
        <ul className="list-disc w-max mx-5">
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a className="flex items-center gap-2" href="#" target="_blank">
              Git-Hub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-pink-600 cursor-pointer">
            <a className="flex items-center gap-2" href="#" target="_blank">
              Instagram <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
        <p>
          Welcome to Premier Tour Management, your ultimate partner in crafting
          unforgettable travel experiences. Whether you're planning a corporate
          retreat, an educational excursion, or a leisure getaway, we specialize
          in designing bespoke tours that cater to your unique needs and
          preferences. With our extensive network of trusted partners, expert
          logistical planning, and a passionate team dedicated to exceptional
          service, we ensure that every journey is seamless, enjoyable, and
          truly memorable. Explore the world with confidence and ease, knowing
          that Premier Tour Management is with you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
