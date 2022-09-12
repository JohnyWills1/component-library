// #region Global Imports
import React, { useEffect, useRef } from 'react';
// #endregion Global Imports

// #region Local Imports
import { Close } from '@Icons';
import { ModalContainer, ModalCloseButton, ModalContent } from './styles';
// #endregion Local Imports

// #region Type Imports
import { Props } from './types';
// #endregion Type Imports

function Modal({ children, isOpen, onClose = () => {} }: Props): JSX.Element {
    const modalRef = useRef<HTMLDivElement>(null);

    function handleClickOutside(e: Event): void {
        if (
            modalRef.current &&
            isOpen &&
            !modalRef.current.contains(e.target as Node)
        ) {
            onClose();
        }
    }

    function handleEscKey(e: KeyboardEvent): void {
        if (e.key === 'Escape' && isOpen) {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen]);

    return (
        <ModalContainer isOpen={isOpen} ref={modalRef}>
            <ModalCloseButton>
                <div onClick={() => onClose()}>
                    <Close />
                </div>
            </ModalCloseButton>
            <ModalContent>{children}</ModalContent>
        </ModalContainer>
    );
}

export default Modal;
