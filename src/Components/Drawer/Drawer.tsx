// #region Global Imports
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// #endregion Global Imports

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    placement: 'left' | 'right' | 'top' | 'bottom';
};

type DrawerProps = {
    isOpen: boolean;
    placement: 'left' | 'right' | 'top' | 'bottom';
};

const transforms = {
    top: 'translateY(-100%)',
    right: 'translateX(100%)',
    bottom: 'translateY(100%)',
    left: 'translateX(-100%)',
};

const placements = {
    top: {
        top: 0,
        right: 0,
        left: 0,
    },
    right: {
        top: 0,
        right: 0,
        bottom: 0,
    },
    bottom: {
        right: 0,
        bottom: 0,
        left: 0,
    },
    left: {
        top: 0,
        bottom: 0,
        left: 0,
    },
};

const DrawerWrapper = styled.div<DrawerProps>`
    position: fixed;
    width: ${(props) =>
        props.placement !== 'top' && props.placement !== 'bottom'
            ? '100%'
            : '100%'};
    height: ${(props) =>
        props.placement === 'top' || props.placement === 'bottom'
            ? '250px'
            : '100%'};
    transform: ${(props) =>
        !props.isOpen ? transforms[props.placement] : 'none'};
    ${(props) => placements[props.placement]};
`;

const DrawerContent = styled.div<DrawerProps>`
    box-sizing: border-box;
    position: fixed;
    z-index: 16;
    ${(props) => placements[props.placement]};
    width: ${(props) =>
        props.placement !== 'top' && props.placement !== 'bottom'
            ? '30%'
            : '100%'};
    height: ${(props) =>
        props.placement !== 'top' && props.placement !== 'bottom'
            ? '100%'
            : '30%'};
    transform: ${(props) =>
        !props.isOpen ? transforms[props.placement] : 'none'};
    transition: transform 0.5s ease-in-out;
    overflow: hidden;
    color: #000;
    background-color: #fff;
    padding: 2rem 1.5rem;
`;

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
                {children}
            </DrawerContent>
        </DrawerWrapper>
    );
}

export default Drawer;
