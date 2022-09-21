import React from "react";

import Topics from "../components/topics";
import image from "../images/computer.jpg";

const Lession = () => {
  return (
    <section class="section-a">
      <div class="container">
        <div>
          <h1>The headphones of the future.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
          <a href="#" class="btn">
            Read More
          </a>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Lession;
