import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalVariant,
  Button,
} from "@patternfly/react-core";
import { useGlobalModalContext } from "./GlobalModalContext";
import errorIcon from "../assets/error.svg";
import "./GeneralModal.css";

export const ErrorModal: React.FC = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { title, content, confirmText } = store.modalProps || {};

  return (
    <Modal
      variant={ModalVariant.small}
      isOpen={true}
      onClose={hideModal}
      appendTo={() => document.body}
      className="neat-modal-container feedback-modal"
      aria-labelledby="modal-title"
    >
      <ModalHeader title={title || "Error"} labelId="modal-title" />
      <ModalBody>
        <div className="modal-feedback-content">
          <div className="modal-icon-container">
            <img src={errorIcon} alt="Error" className="modal-icon" />
          </div>
          <div className="neat-modal-body text-center">
            <strong className="strong">{title}</strong>
            <br />
            {content || "An unexpected error occurred."}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          key="confirm"
          variant="danger"
          onClick={hideModal}
          className="neat-modal-btn-confirm"
        >
          {confirmText || "Try Again"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
