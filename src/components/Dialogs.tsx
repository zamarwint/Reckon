import { forwardRef, useEffect, useState } from "react";
import "./Dialog.css";
import ModalContentError from "./ModalContentError";
import ModalContentSuccess from "./ModalContentSuccess";

type Props = {
  children: React.ReactNode;
  toggleDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog }, ref) => {
    // DETECTING THE CURRENT THEME
    const [theme, setTheme] = useState("#000000");

    useEffect(() => {
      const checkTheme = () => {
        // Detects theme from common patterns (data-theme attribute or 'dark' class)
        const isDark =
          document.documentElement.getAttribute("data-theme") === "dark" ||
          document.documentElement.classList.contains("dark") ||
          document.body.classList.contains("dark-mode");
        setTheme(isDark ? "#ffffff" : "#000000");
      };

      checkTheme();
      const observer = new MutationObserver(checkTheme);
      observer.observe(document.documentElement, { attributes: true });
      return () => observer.disconnect();
    }, []);

    return (
      <dialog className="modal" ref={ref}>
        <div className="dialog-top">
          <svg
            fill={theme}
            height="32px"
            width="32px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460.775 460.775"
            className="close-icon"
            onClick={toggleDialog}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
            </g>
          </svg>
        </div>
        <div className="dialog-under">{children}</div>
      </dialog>
    );
  },
);

export const ErrorModal = forwardRef<
  HTMLDialogElement,
  { toggleDialog: () => void }
>(({ toggleDialog }, ref) => (
  <Dialog ref={ref} toggleDialog={toggleDialog}>
    <ModalContentError />
  </Dialog>
));

export const SuccessModal = forwardRef<
  HTMLDialogElement,
  { toggleDialog: () => void }
>(({ toggleDialog }, ref) => (
  <Dialog ref={ref} toggleDialog={toggleDialog}>
    <ModalContentSuccess />
  </Dialog>
));

export default Dialog;
