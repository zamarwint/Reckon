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
import successIcon from "../assets/success.svg";
import "./GeneralModal.css";

export const SuccessModal: React.FC = () => {
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
      <ModalHeader title={title || "Success"} labelId="modal-title" />
      <ModalBody>
        <div className="modal-feedback-content">
          <div className="modal-icon-container">
            <img src={successIcon} alt="Success" className="modal-icon" />
          </div>
          <div className="neat-modal-body text-center">
            <strong className="strong">{title}</strong>
            <br />
            {content || "The operation was successful!"}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          key="confirm"
          variant="primary"
          onClick={hideModal}
          className="neat-modal-btn-confirm"
        >
          {confirmText || "Dismiss"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
