import * as React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

type PortalProps = {
  children: React.ReactNode;
  trigger: boolean;
};

const Portal = ({ children, trigger }: PortalProps) =>
  createPortal(
    <CSSTransition in={trigger} timeout={250} classNames="modal" unmountOnExit>
      {children}
    </CSSTransition>,
    document.body
  );

export default Portal;
