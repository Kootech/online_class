import React from "react";
import image from "../images/computer.jpg";

const Card = ({ lession }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={`http://localhost:8000${lession.profile_pic}`}
          alt=""
        />
      </a>
      <div className="p-5">
        <h3>machine learning</h3>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {lession.lession_name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {lession.description}
        </p>
        <h4>duration</h4>
      </div>
    </div>
  );
};

export default Card;
