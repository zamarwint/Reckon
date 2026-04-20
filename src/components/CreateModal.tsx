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

export const CreateModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title, confirmText, onConfirm } = modalProps || {};

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    hideModal();
  };

  return (
    <Modal
      variant={ModalVariant.medium}
      isOpen={true}
      onClose={hideModal}
      appendTo={() => document.body}
      className="neat-modal-container"
      aria-labelledby="modal-title"
    >
      <ModalHeader title={title || "Create Modal"} labelId="modal-title" />
      <ModalBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        labore repudiandae deserunt architecto autem excepturi a? Voluptatum ex
        architecto, iusto voluptatibus, adipisci provident similique suscipit
        vel minima autem assumenda. Aspernatur.
      </ModalBody>
      <ModalFooter>
        <Button
          key="confirm"
          variant="primary"
          onClick={handleConfirm}
          className="neat-modal-btn-confirm"
        >
          {confirmText || "Create"}
        </Button>
        <Button
          key="cancel"
          variant="link"
          onClick={hideModal}
          className="neat-modal-btn-cancel"
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
