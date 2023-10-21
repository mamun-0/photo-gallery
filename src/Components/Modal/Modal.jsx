import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Comments from "../Comments/Comments";
import { useEffect } from "react";

function Popup(props) {
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState(null);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setComment(props.comments);
  }, [props.comments]);
  useEffect(() => {}, [comment]);
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
          <Comments comments={comment} />
          <FeedbackForm {...props} setComment={setComment} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Popup;
