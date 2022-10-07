// #region Global Imports
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// #endregion Global Imports

// #region Local Imports
import { ReactPortal } from '@Components';
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
        <ReactPortal id="root">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0, duration: 0.4 }}
                    >
                        <ModalContainer isOpen={isOpen} ref={modalRef}>
                            <ModalCloseButton>
                                <div onClick={() => onClose()}>
                                    <Close />
                                </div>
                            </ModalCloseButton>
                            <ModalContent>{children}</ModalContent>
                        </ModalContainer>
                    </motion.div>
                )}
            </AnimatePresence>
        </ReactPortal>
    );
}

export default Modal;
