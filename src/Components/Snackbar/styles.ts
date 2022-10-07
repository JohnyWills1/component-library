// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

// #region Type Imports
import { SnackbarOrigin, VariantType } from './types';
// #endregion Type Imports

export const SnackbarContainer = styled.div<{ anchorOrigin: SnackbarOrigin }>`
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    max-height: 100%;
    position: fixed;
    z-index: 10000;
    height: auto;
    width: auto;
    max-width: calc(100% - 40px);
    top: ${({ anchorOrigin }) => {
        if (anchorOrigin.vertical === 'top') {
            return '56px';
        }
        return 'unset';
    }};
    left: ${({ anchorOrigin }) => {
        if (anchorOrigin.horizontal === 'left') {
            return '20px';
        }
        if (anchorOrigin.horizontal === 'center') {
            return '50%';
        }
        return 'unset';
    }};
    right: ${({ anchorOrigin }) => {
        if (anchorOrigin.horizontal === 'right') {
            return '20px';
        }
        return 'unset';
    }};
    bottom: ${({ anchorOrigin }) => {
        if (anchorOrigin.vertical === 'bottom') {
            return '14px';
        }
        return 'unset';
    }};
    flex-direction: ${({ anchorOrigin }) => {
        if (anchorOrigin.vertical === 'top') {
            return 'column';
        }
        return 'column-reverse';
    }};
    align-items: ${({ anchorOrigin }) => {
        if (anchorOrigin.horizontal === 'left') {
            return 'flex-start';
        }
        if (anchorOrigin.horizontal === 'center') {
            return 'center';
        }
        return 'flex-end';
    }};
    transform: ${({ anchorOrigin }) => {
        if (anchorOrigin.horizontal === 'center') {
            return 'translateX(-50%)';
        }
        return 'unset';
    }};
`;

export const StyledSnackbarItem = styled.div<{ variant: VariantType }>`
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-height: 40px;
    height: 100%;
    background-color: ${({ variant }) => {
        switch (variant) {
            case 'success':
                return 'rgb(67, 160, 71)';
            case 'error':
                return '#D82C0D';
            case 'info':
                return 'rgb(41, 121, 255)';
            case 'warning':
                return 'rgb(255, 160, 0)';
            default:
                return '#111213';
        }
    }};
    font-family: 'Hiragino Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #ffffff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 16px;
`;

export const StyledSnackbarItemMessage = styled.p`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

export const StyledSnackbarAction = styled.div`
    font-family: 'Hiragino Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

export const StyledSnackbarItemClose = styled.div`
    cursor: pointer;
    font-size: 13px;
    flex-shrink: 0;
`;
