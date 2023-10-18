import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

function Popup(props) {
  console.log(props);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn btn-info" onClick={toggle}>
        Details
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Comment</ModalHeader>
        <ModalBody>
            <img style={{width:`100%`, height:`300px`, objectFit:'cover'}} className="mb-2" src={props.url} alt="img" />
          <FeedbackForm toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Popup;
