import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, Modals } from '../styles';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <Modals className="modal">
                    {this.props.children}
                </Modals>
            </Overlay>
            , modalRoot);
    }
}

export default Modal;