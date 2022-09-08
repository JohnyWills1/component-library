// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

// #region Type Imports
import { DrawerProps } from './types';
// #endregion Type Imports

const transforms = {
    bottom: 'translateY(100%)',
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    top: 'translateY(-100%)',
};

const placements = {
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
    right: {
        top: 0,
        right: 0,
        bottom: 0,
    },
    top: {
        top: 0,
        right: 0,
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
    padding: 2rem;
`;

const DrawerCloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.7em;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
    }

    div:hover {
        background-color: #ebebeb;
        border-radius: 6px;
        cursor: pointer;
    }
`;

const DrawerChildrenContent = styled.div`
    margin-top: 12px;
`;

export {
    DrawerChildrenContent,
    DrawerCloseButton,
    DrawerContent,
    DrawerWrapper,
};
