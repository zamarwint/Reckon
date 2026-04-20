import { createContext, useContext } from "react";

export const MODAL_TYPES = {
  CREATE_MODAL: "CREATE_MODAL",
  DELETE_MODAL: "DELETE_MODAL",
  UPDATE_MODAL: "UPDATE_MODAL",
  GENERAL_MODAL: "GENERAL_MODAL",
  SUCCESS_MODAL: "SUCCESS_MODAL",
  ERROR_MODAL: "ERROR_MODAL",
};

export type GlobalModalContextType = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: {
    modalType: string | null;
    modalProps: any;
  };
};

export const initialState: GlobalModalContextType = {
  showModal: () => {},
  hideModal: () => {},
  store: { modalType: null, modalProps: {} },
};

export const GlobalModalContext =
  createContext<GlobalModalContextType>(initialState);

export const useGlobalModalContext = () => useContext(GlobalModalContext);
