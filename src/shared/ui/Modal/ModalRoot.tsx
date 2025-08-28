import ReactDOM from "react-dom";
import type { ReactNode } from "react";
import styles from "./Modal.module.css";

type RootProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Root = ({ isOpen, onClose, children }: RootProps) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};