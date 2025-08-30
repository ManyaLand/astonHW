import ReactDOM from "react-dom";
import type { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

type RootProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export const Root = ({ isOpen, onClose, children }: RootProps) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};