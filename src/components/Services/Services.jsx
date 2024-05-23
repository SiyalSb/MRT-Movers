import React from "react";
import "./Services.css";
import image_1 from "../../assets/service-img1.jpg";
import image_2 from "../../assets/service-img2.jpg";

const Services = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <div className="image-overlay-container">
          <img src={image_1} alt="Image-1" className="image" />
          <div className="overlay">
            <div className="text">FURNITURE MOVERS</div>
          </div>
        </div>
        <h2 className="image-heading">Furniture movers</h2>
        <p className="image-description">
          As professional furniture movers in Dubai, we specialize in providing
          seamless and efficient relocation services tailored to meet the
          diverse needs of our clients. Our team is equipped with the expertise
          and tools necessary to handle everything from delicate antiques to
          bulky office furniture with the utmost care.
        </p>
        <button >Read more</button>
      </div>
      <div className="image-wrapper">
        <div className="image-overlay-container">
          <img src={image_2} alt="Image-2" className="image" />
          <div className="overlay">
            <div className="text">OFFICE MOVERS</div>
          </div>
        </div>
        <h2 className="image-heading">Office movers</h2>
        <p className="image-description">
          As experienced office movers in Dubai, we offer specialized relocation
          services designed to minimize disruption and ensure a smooth
          transition for businesses of all sizes. Our professional team is adept
          at handling all aspects of office moves, from meticulous planning and
          packing to the safe transport and reassembly of office equipment and
          furniture.
        </p>
        <button>Read more</button>
      </div>
      <div className="image-wrapper">
        <div className="image-overlay-container">
          <img src={image_2} alt="Image 2" className="image" />
          <div className="overlay">
            <div className="text">FLAT MOVERS IN DUBAI</div>
          </div>
        </div>
        <h2 className="image-heading">Flat movers</h2>
        <p className="image-description">
          As expert flat movers in Dubai, we provide tailored relocation
          services that cater to the unique requirements of apartment living.
          Our team is skilled in navigating the complexities of high-rise
          buildings, narrow hallways, and compact spaces, ensuring a hassle-free
          moving experience.
        </p>
        <button>Read more</button>
      </div>
      <div className="image-wrapper">
        <div className="image-overlay-container">
          <img src={image_2} alt="Image 2" className="image" />
          <div className="overlay">
            <div className="text">VILLA MOVERS</div>
          </div>
        </div>
        <h2 className="image-heading">Villa movers</h2>
        <p className="image-description">
          As premier villa movers in Dubai, we specialize in delivering
          comprehensive and customized relocation services tailored to the
          distinct demands of villa living. Our team is proficient in managing
          the complexities of moving large, multi-story homes, ensuring that
          every piece of furniture, appliance, and personal item is packed,
          transported, and unpacked with the highest level of care.
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default Services;
