import React from "react";
import Guy from "../assets/guy.jpg";
import "./contact.css";
function Contact() {
  return (
    <div
      id="contact"
      class="  my-4 align-items-center justify-content-center"
    >
      <h3 class="text-center text-muted">Contact us</h3>
      <div
        class="
        my-3
          bg-white
          p-4
          shadow-sm
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <img
          style={{width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginRight: "30px"}}
          id="guy"
          alt="guy"
          src={Guy}
        />
        <div class="ml-2">
          <h5>Idris Imam</h5>
          <h5>08068606897</h5>
          <a
            class="btn btn-success"
            href="http://wa.me/+2348068606897"
            target="_blank"
            rel="noopener noreferrer"
            >Talk on WhatsApp</a
          >
        </div>
      </div>
    </div>
  );
}

export default Contact;
