// #region Global Imports
import { useEffect, type FC } from 'react';
// #endregion Global Imports

// #region Local Imports
import { Close } from '@Icons';
import {
    StyledSnackbarAction,
    StyledSnackbarItem,
    StyledSnackbarItemClose,
    StyledSnackbarItemMessage,
} from './styles';
// #endregion Local Imports

// #region Type Imports
import { Snack, SnackbarKey } from './types';
// #endregion Type Imports

export interface SnackbarItemProps {
    key: SnackbarKey;
    onClose: (key: SnackbarKey) => void;
    snack: Snack;
}

export const SnackbarItem: FC<SnackbarItemProps> = ({ onClose, snack }) => {
    const {
        action: singleAction,
        autoHideDuration,
        message: snackMessage,
        variant,
    } = snack;

    useEffect(() => {
        if (autoHideDuration) {
            setTimeout(() => {
                onClose(snack.key);
            }, autoHideDuration);
        }
    }, [autoHideDuration, onClose, snack.key]);

    let action = singleAction;
    if (typeof action === 'function') {
        action = action(snack.key);
    }

    return (
        <StyledSnackbarItem variant={variant}>
            <StyledSnackbarItemMessage>
                {snackMessage}
            </StyledSnackbarItemMessage>
            {action && <StyledSnackbarAction>{action}</StyledSnackbarAction>}
            <StyledSnackbarItemClose
                onClick={() => {
                    onClose(snack.key);
                }}
            >
                <Close />
            </StyledSnackbarItemClose>
        </StyledSnackbarItem>
    );
};
