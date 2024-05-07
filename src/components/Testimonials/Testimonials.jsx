import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

    const slider1 = useRef();
    let tx = 0;
  const slideForward = () => {
   if(tx > -50){
    tx -=25
   }
   slider1.current.style.transform = `translateX(${tx}%)`
  };

  const slideBackward = () => { 
    if(tx < 0){
        tx +=25
       }
       slider1.current.style.transform = `translateX(${tx}%)`
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider1}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jassica</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur aperiam voluptatem repellendus fugiat accusamus,
                nihil tempore nam harum, deserunt, quae at deleniti quam
                quisquam repellat distinctio aspernatur obcaecati! Voluptatem
                beatae reprehenderit quas asperiores vero quae omnis praesentium
                quisquam. Corrupti, quod?{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Michael Clarke</h3>
                  <span>Melborne, Australia</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur aperiam voluptatem repellendus fugiat accusamus,
                nihil tempore nam harum, deserunt, quae at deleniti quam
                quisquam repellat distinctio aspernatur obcaecati! Voluptatem
                beatae reprehenderit quas asperiores vero quae omnis praesentium
                quisquam. Corrupti, quod?{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>julia</h3>
                  <span>London, England</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur aperiam voluptatem repellendus fugiat accusamus,
                nihil tempore nam harum, deserunt, quae at deleniti quam
                quisquam repellat distinctio aspernatur obcaecati! Voluptatem
                beatae reprehenderit quas asperiores vero quae omnis praesentium
                quisquam. Corrupti, quod?{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Chris Jordan</h3>
                  <span>Bermingham, England</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur aperiam voluptatem repellendus fugiat accusamus,
                nihil tempore nam harum, deserunt, quae at deleniti quam
                quisquam repellat distinctio aspernatur obcaecati! Voluptatem
                beatae reprehenderit quas asperiores vero quae omnis praesentium
                quisquam. Corrupti, quod?{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
