import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEVrbndrbXmqtu/sAAACOklEQVR4nO3dQXLqMBREUdj/pjNKIJQNRpasflf3zP4A0y09yZNf5HYb7H4f/Q2z4QtK6ot/LYbdi1lpRlhgpNQff2z4DTfwS+c2HJ9send+wyvxy/IbSkj8k+vlpFL4A8tvqARNc1ZqOAs2LLW+TbANscX+lGrYK+yB58xal14NR3xVpVFpUuowSGqXddYHXD1ht1lYnF1VcraLbHgw1OjsA5/PbyhJK+Pfrr5AFAo/mZ49SSLi3+74ghLNAtcSvqGq4M8ivuCvBbYS3/CwBZaic8PwFesRL7thejypvPBbroP8ho+E10a9bmX+vunizWj7uuD/gN/JgfTFG275XKl66SoNj6XIyHrMa9aDDUdEGWSrUesO1dnZ5qBlGqqSOienFb+hJE3Gv2j5DaWvFT0WX6QeVHD0uk3fmOkBVMHelHDGZ68Jp6EkSaXgX8F3ekN6PykM/8gFN8xN1kvY4ofFGYDfcLoFlpjfULk8YBITf/AXuL0kSafw3xT8hkt6t6uMHX83uA61JC1wFe405BeHvMjZHENJWh7/VXCqIXN5nktBG675i2Qv+A03hdd++nnG1qB1Go55LFbdhvzNATYEVno1veH0AKPxh8iG+oe/XPyG0pr4Z5vfUKGCR69LtDO/JvHVJ9v+1EbLh16fceIhX302eFTG4BfmN1SS++4/Gp+XNr//A3WIF9fwIThaJ/yGYtucYNRYbze8PIYmw2/5vFPr0mb4kDKsRUOcTx+p1zAr8Ahhe3LKD6plAVoOr9ZvAAAAAElFTkSuQmCC" className="card-img"height="400px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW FALL ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK THEM OUT NOW!
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;