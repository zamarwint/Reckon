import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalVariant,
  Button,
} from "@patternfly/react-core";
import { useGlobalModalContext } from "./GlobalModalContext";

export const DeleteModal = () => {
  const { hideModal } = useGlobalModalContext();

  return (
    <Modal
      variant={ModalVariant.small}
      isOpen={true}
      onClose={hideModal}
      appendTo={() => document.body}
      className="neat-modal-container"
      aria-labelledby="modal-title"
    >
      <ModalHeader title={"Delete Confirmation"} labelId="modal-title" />
      <ModalBody>
        Are you sure you want to delete this item? This action cannot be undone.
      </ModalBody>
      <ModalFooter>
        <Button
          key="confirm"
          variant="danger"
          onClick={hideModal}
          className="neat-modal-btn-confirm"
        >
          Delete
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
