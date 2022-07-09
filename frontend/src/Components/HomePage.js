import React, { useState } from "react";
import Hero from "../Sections/HomePage/Hero";
import NavBar from "../Sections/HomePage/NavBar";
import Footer from "../Sections/HomePage/Footer";
import { Button, Modal } from "antd";

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  // const [ auth, setAuth ] = useState(false)
  const showModal = () => {
    console.log (visible);
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <>
      <NavBar />
     <Hero />
      <Footer />
    </>
  );
};

export default HomePage;
