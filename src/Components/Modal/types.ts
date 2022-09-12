// #region Global Imports
import React from 'react';
// #endregion Global Imports

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

type ModalProps = {
    isOpen: boolean;
};

export type { ModalProps, Props };
