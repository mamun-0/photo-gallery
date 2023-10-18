import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Comments from "../Comments/Comments";

function Popup(props) {
  // console.log(props.comments);
  const [modal, setModal] = useState(false);
  const [bool, setBool] = useState(false);
  const toggle = () => setModal(!modal);
  const changeState = () => setBool(!bool);
  return (
    <div>
      <Button className="btn btn-info" onClick={toggle}>
        Details
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Comments</ModalHeader>
        <ModalBody>
          <img
            style={{ width: `100%`, height: `300px`, objectFit: "cover" }}
            className="mb-2"
            src={props.url}
            alt="img"
          />
          <Comments comments={props.comments} />
          <FeedbackForm {...props} changeState={changeState} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Popup;
