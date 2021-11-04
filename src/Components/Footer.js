import React from "react";
import "./footer.css"

function Footer() {
  return (
    <footer id="footer" class="headline mt-4 bg-dark p-3 text-center">
      <div class="text-light footer__">
        <h3>Idris Imam Ventures Ltd</h3>
        <p>
          Kofar Wambai Market, Yan Rubber Junction Opposite Maihali Plaza. No
          2&3 Idris Imam Ventures Ltd Kano,
        </p>
        <p>or Call 08068606897 or 09031612022. Thank You</p>
        <p>Built by  
          <a className='text-primary' target='_blank' href="https://wa.me/2348032542898?text=Hi Hamza,%20I%20need%20a:%20website">
             {" "}Hamza Shadeez/ 08032542898</a></p>
      </div>
    </footer>
  );
}

export default Footer;
