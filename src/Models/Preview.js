import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ImagePreview } from "../recoil/Image";

function Preview(props) {
    const [image, setImage] = useRecoilState(ImagePreview);
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img style={{width: "100%", objectFit: "contain"}} alt='image' src={image} />
      </Modal.Body>
    </Modal>
  );
}

export default Preview;
