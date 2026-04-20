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
import "./GeneralModal.css";

export const GeneralModal: React.FC = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const {
    title,
    content,
    confirmText,
    onConfirm,
    variant = ModalVariant.medium,
  } = modalProps || {};

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    hideModal();
  };

  return (
    <Modal
      variant={variant}
      isOpen={true}
      onClose={hideModal}
      appendTo={() => document.body}
      className="neat-modal-container"
      aria-labelledby="modal-title"
    >
      <ModalHeader title={title || "Notification"} labelId="modal-title" />
      <ModalBody>
        <div className="neat-modal-body">
          {content || "No content provided."}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          key="confirm"
          variant="primary"
          onClick={handleConfirm}
          className="neat-modal-btn-confirm"
        >
          {confirmText || "Confirm"}
        </Button>
        ,
        <Button
          key="cancel"
          variant="link"
          onClick={hideModal}
          className="neat-modal-btn-cancel"
        >
          Close
        </Button>
        ,
      </ModalFooter>
    </Modal>
  );
};
