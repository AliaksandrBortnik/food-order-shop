import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div onClick={props.onClick} className={classes.backdrop}/>
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

const portalElementRef = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElementRef)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElementRef)}
    </Fragment>
  )
};

export default Modal;