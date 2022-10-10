// #region Global Imports
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// #endregion Global Imports

// #region Local Imports
import { Close } from '@Icons';
import {
    DrawerBackdrop,
    DrawerChildrenContent,
    DrawerCloseButton,
    DrawerContent,
    DrawerWrapper,
} from './styles';
// #endregion Local Imports

// #region Type Imports
import { Props } from './types';
// #endregion Type Imports

function Drawer({
    children,
    hideButton = false,
    isOpen,
    onClose = () => {},
    placement = 'left',
}: Props) {
    const drawerRef = useRef<HTMLDivElement>(null);

    function handleClickOutside(e: Event): void {
        if (
            drawerRef.current &&
            isOpen &&
            !drawerRef.current.contains(e.target as Node)
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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0, duration: 0.3 }}
                >
                    <DrawerWrapper isOpen={isOpen} placement={placement}>
                        <DrawerBackdrop isOpen={isOpen} />
                        <DrawerContent
                            isOpen={isOpen}
                            placement={placement}
                            ref={drawerRef}
                        >
                            {!hideButton && (
                                <DrawerCloseButton>
                                    <div onClick={() => onClose()}>
                                        <Close />
                                    </div>
                                </DrawerCloseButton>
                            )}
                            <DrawerChildrenContent>
                                {children}
                            </DrawerChildrenContent>
                        </DrawerContent>
                    </DrawerWrapper>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Drawer;
