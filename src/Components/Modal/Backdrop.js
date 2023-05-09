import React from 'react';
import ReactDOM from 'react-dom';
import './Backdrop.css';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div stlye={styles.backdrop} onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook'),
  );
};
export default Backdrop;

const styles = {
    backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0.75)',
    opacity: 0.6,
    zIndex: 200,
    }
}