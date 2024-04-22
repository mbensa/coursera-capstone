import React from "react";
import Text from "./Text";
import "./testimonials.css";
import persona1 from "../assets/persona1.jpg";
import persona2 from "../assets/persona2.jpg";
import persona3 from "../assets/persona3.jpg";
import persona4 from "../assets/persona4.jpg";

export default function Testimonials() {
  return (
    <section className="sectionTestimonialsContainer">
      <Text type="h2" className="testimonialsTitle">
        What customers say about us
      </Text>
      <div className="testimonialsContainer">
        <div className="testimonialscardContainer">
          <Text type="h6">Rating: 5</Text>
          <div className="testimonialsImgContainer">
            <img
              src={persona1}
              alt="a young woman with long black hair"
              className="testimonialsImg"
            />
            <Text type="h6">Jamie</Text>
          </div>
          <Text type="p">
            "Best dining experience I've ever had. Highly recommend."
          </Text>
        </div>
        <div className="testimonialscardContainer">
          <Text type="h6">Rating: 5</Text>
          <div className="testimonialsImgContainer">
            <img
              src={persona2}
              alt="a man with glasses and short brown hair"
              className="testimonialsImg"
            />
            <Text type="h6">Tom</Text>
          </div>
          <Text type="p">
            "The bruschetta was out of this world. I will definitely return"
          </Text>
        </div>
        <div className="testimonialscardContainer">
          <Text type="h6">Rating: 5</Text>
          <div className="testimonialsImgContainer">
            <img
              src={persona3}
              alt="a woman with long curly black hair and glasses"
              className="testimonialsImg"
            />
            <Text type="h6">Katie</Text>
          </div>
          <Text type="p">
            "Don't skip the dessert, the lemon pie was absolutely amazing."
          </Text>
        </div>
        <div className="testimonialscardContainer">
          <Text type="h6">Rating: 5</Text>
          <div className="testimonialsImgContainer">
            <img
              src={persona4}
              alt="a man with short brown hair and a beard"
              className="testimonialsImg"
            />
            <Text type="h6">Rick</Text>
          </div>
          <Text type="p">
            "Thanks for the amazing dining experience. We will gladly return."
          </Text>
        </div>
      </div>
    </section>
  );
}
