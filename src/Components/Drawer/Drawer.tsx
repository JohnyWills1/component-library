// #region Global Imports
import React, { useEffect, useRef } from 'react';
// #endregion Global Imports

// #region Local Imports
import { Close } from '@Icons';
import { DrawerCloseButton, DrawerContent, DrawerWrapper } from './styles';
// #endregion Local Imports

// #region Type Imports
import { Props } from './types';
// #endregion Type Imports

function Drawer({
    children,
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
        <DrawerWrapper isOpen={isOpen} placement={placement}>
            <DrawerContent
                isOpen={isOpen}
                placement={placement}
                ref={drawerRef}
            >
                <DrawerCloseButton>
                    <Close />
                </DrawerCloseButton>
                {children}
            </DrawerContent>
        </DrawerWrapper>
    );
}

export default Drawer;
