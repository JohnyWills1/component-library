export type SnackbarMessage = string | React.ReactNode;
export type VariantType =
    | 'default'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'custom';
export type SnackbarKey = string | number;
export type SnackbarOrigin = {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
};
export type SnackbarAction =
    | React.ReactNode
    | ((key: SnackbarKey) => React.ReactNode);

export type SnackbarOptions = {
    action?: SnackbarAction;
    anchorOrigin?: SnackbarOrigin;
    autoHideDuration?: number;
    key?: SnackbarKey;
    variant?: VariantType;
};

export interface Snack {
    action?: SnackbarAction;
    anchorOrigin: SnackbarOrigin;
    autoHideDuration?: number;
    entered: boolean;
    key: SnackbarKey;
    message: SnackbarMessage;
    open: boolean;
    persist?: boolean;
    requestClose: boolean;
    variant: VariantType;
}

export interface SnackbarProviderProps {
    children: React.ReactNode | React.ReactNode[];
    domRoot?: HTMLElement;
    maxSnack?: number;
    variant?: VariantType;
    anchorOrigin: SnackbarOrigin;
}
