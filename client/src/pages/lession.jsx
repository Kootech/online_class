import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Topics from "../components/topics";
import image from "../images/computer.jpg";

const Lession = () => {
  const { id } = useParams();
  const { lessions } = useSelector((state) => state.lessions);
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();

  const lession = lessions.filter((les) => les.id == id);

  return (
    <section className="section-a">
      <div className="container">
        <div>
          <h1>{lession[0].lession_name}</h1>
          <p>{lession[0].description}</p>
          <button
            onClick={() => {
              !user ? navigate("/login") : navigate("/topics");
            }}
            className=" bg-gray-400 rounded-sm w-20"
          >
            Get Started
          </button>
        </div>
        <img src={`http://localhost:8000${lession[0].profile_pic}`} alt="" />
      </div>
    </section>
  );
};

export default Lession;
