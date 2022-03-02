import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: bhanothnarender007@gmail.com</Button>
        <Button>Contact: rajudamera1111@gmail.com</Button>
        <Button>Contact: srijanchilumula@gmail.com</Button>
        <Button>Contact: vignesh.aila546@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
