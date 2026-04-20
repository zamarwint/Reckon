import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalVariant,
  Button,
} from "@patternfly/react-core";
import { useGlobalModalContext } from "./GlobalModalContext";

export const UpdateModal = () => {
  const { hideModal } = useGlobalModalContext();

  const handleModalToggle = () => {
    hideModal();
  };

  return (
    <Modal
      variant={ModalVariant.medium}
      isOpen={true}
      onClose={handleModalToggle}
      aria-labelledby="modal-title"
    >
      <ModalHeader title={"Update Modal"} labelId="modal-title" />
      <ModalBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        labore repudiandae deserunt architecto autem excepturi a? Voluptatum ex
        architecto, iusto voluptatibus, adipisci provident similique suscipit
        vel minima autem assumenda. Aspernatur.
      </ModalBody>
      <ModalFooter>
        <Button key="confirm" variant="primary" onClick={handleModalToggle}>
          Confirm
        </Button>
        ,
        <Button key="cancel" variant="link" onClick={handleModalToggle}>
          Cancel
        </Button>
        ,
      </ModalFooter>
    </Modal>
  );
};
