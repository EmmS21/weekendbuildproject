import React, { useState } from "react";
import "../../Assets/CSS/index.css";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";

const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const [buttonClicked, setButtonClicked] = useState("");
  const [visible, setVisible] = useState(false);

    const handleSignUp = () => {
    setButtonClicked("Signup")}
    //setVisible(true)
  
    const handleLogin = () => {
        setButtonClicked("Login")}
    //setVisible(true)
    
  
  return (
    <>
      <header className="navbar">
        <div>Home</div>
        <div>Dashboard</div>

        
        <div className="button-group">
          <Button type="primary" onClick={handleSignUp}>
            Signup
          </Button>
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </header>
      {buttonClicked.length > 0 && buttonClicked === "Signup" ?
        <Modal
         
            title='Signup'
            visible={visible}
            
            >
                <form>
                    <input id = "email" type = "email" name = "email">
                        Email
                    </input>
                    <input id = "password" type = "password" name = "password">
                        Password
                    </input>
                    <input id = "confirm_password" type = "confirm_password" name = "confirm_password">
                        Confirm Password
                    </input>
                </form>
        </Modal>
        : <Modal
         
        title='Login'
        visible={visible}
        >
            <form>
                <input id = "email" type = "email" name = "email">
                    Email
                </input>
                <input id = "password" type = "password" name = "password">
                    Password
                </input>
            </form>
    </Modal> }
 </>
  );
};

export default NavBar;
