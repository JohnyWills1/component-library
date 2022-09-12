// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

// #region Type Imports
import { ModalProps } from './types';
// #endregion Type Imports

const ModalContainer = styled.div<ModalProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    overflow-y: auto;
    width: 600px;
    max-width: 100%;
    height: 400px;
    max-height: 100%;
    margin-top: -200px;
    margin-left: -300px;
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transition: transform, opacity 600ms cubic-bezier(0.2, 0.8, 0.4, 1);
    background-color: white;
    color: black;
    pointer-events: ${(props) => (props.isOpen ? 'unset' : 'none')};
    border-radius: 16px;
    padding: 1.5em 2em;
`;

const ModalContent = styled.div``;

const ModalCloseButton = styled.div`
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

export { ModalCloseButton, ModalContainer, ModalContent };
