import React, { useState } from "react";
import "../../Assets/CSS/index.css";

const Footer = () => {
  const [auth, setAuth] = useState(false);
  return (

    <div className="footer">
        
         <div className="container">
        <div className="first-footer">
      <div>
        <h4>Home</h4>
      </div>
      <div>
        <h4>About</h4>
      </div>
      <div>
        <h4>Features</h4>
      </div>
      <div>
        <h4>Contact</h4>
      </div>
      <div>
        <h4>Privacy</h4>
      </div>
      </div>
      
 
 <hr />

 <div className="second-footer">
<p>
        &copy;{new Date().getFullYear()} Weekend Build | All rights reserved | Terms Of Service
    </p>
</div>
</div>
</div>
 
  );
};

export default Footer;
