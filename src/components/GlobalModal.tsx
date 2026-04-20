import React, { useState } from "react";
import { CreateModal } from "./CreateModal";
import { DeleteModal } from "./DeleteModal";
import { UpdateModal } from "./UpdateModal";
import { GeneralModal } from "./GeneralModal";
import { SuccessModal } from "./SuccessModal";
import { ErrorModal } from "./ErrorModal";
import { MODAL_TYPES, GlobalModalContext } from "./GlobalModalContext";

export { MODAL_TYPES, useGlobalModalContext } from "./GlobalModalContext";

const MODAL_COMPONENTS: Record<string, React.ComponentType<any>> = {
  [MODAL_TYPES.CREATE_MODAL]: CreateModal,
  [MODAL_TYPES.DELETE_MODAL]: DeleteModal,
  [MODAL_TYPES.UPDATE_MODAL]: UpdateModal,
  [MODAL_TYPES.GENERAL_MODAL]: GeneralModal,
  [MODAL_TYPES.SUCCESS_MODAL]: SuccessModal,
  [MODAL_TYPES.ERROR_MODAL]: ErrorModal,
};

export const GlobalModal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [store, setStore] = useState<{
    modalType: string | null;
    modalProps: any;
  }>({
    modalType: null,
    modalProps: {},
  });
  const { modalType, modalProps } = store || {};

  const showModal = (type: string, props: any = {}) => {
    setStore({
      modalType: type,
      modalProps: props,
    });
  };

  const hideModal = () => {
    setStore({
      modalType: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    if (!modalType || !MODAL_COMPONENTS[modalType]) return null;
    const ModalComponent = MODAL_COMPONENTS[modalType];
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
