// #region Global Imports
import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
// #endregion Global Imports

// #region Local Imports
import { SnackbarItem } from './SnackbarItem';
import { SnackbarContainer } from './styles';
// #endregion Local Imports

// #region Type Imports
import {
    Snack,
    SnackbarKey,
    SnackbarMessage,
    SnackbarOptions,
    SnackbarOrigin,
    SnackbarProviderProps,
} from './types';
// #endregion Type Imports

export interface ProviderContext {
    enqueueSnackbar: (
        message: string | React.ReactNode,
        options: SnackbarOptions,
    ) => void;
    closeSnackbar: (key: SnackbarKey) => void;
}

/* eslint-disable @typescript-eslint/no-empty-function */
export const SnackbarContext = createContext<ProviderContext>({
    enqueueSnackbar: () => {},
    closeSnackbar: () => {},
});
/* eslint-enable @typescript-eslint/no-empty-function */

export const SnackbarProvider = ({
    children,
    domRoot,
    maxSnack = 3,
    variant,
    anchorOrigin,
}: SnackbarProviderProps) => {
    const [snacks, setSnacks] = useState<Snack[]>([]);
    const [queue, setQueue] = useState<Snack[]>([]);
    const [initialAnchorOrigin, setInitialAnchorOrigin] =
        useState<SnackbarOrigin>(anchorOrigin);

    const handleDisplaySnack = useCallback(
        (handleQueue: Snack[], handleSnacks: Snack[]) => {
            if (handleSnacks.length >= maxSnack) {
                return {
                    handleQueue: [...handleQueue.slice(1)],
                    handleSnacks: [...handleSnacks.slice(1), handleQueue[0]],
                };
            }

            return {
                handleSnacks: [...handleSnacks, handleQueue[0]],
                handleQueue: handleQueue.slice(1),
            };
        },
        [maxSnack],
    );

    const enqueueSnackbar = useCallback(
        (message: SnackbarMessage, options: SnackbarOptions): SnackbarKey => {
            const {
                anchorOrigin: snackAnchorOrigin,
                autoHideDuration,
                key,
                variant: snackVariant,
            } = options;

            const id = key ? key : new Date().getTime() + Math.random();

            const snack: Snack = {
                key: id,
                ...options,
                message,
                open: true,
                entered: false,
                requestClose: false,
                variant: snackVariant || variant || 'default',
                anchorOrigin: snackAnchorOrigin
                    ? snackAnchorOrigin
                    : anchorOrigin,
                autoHideDuration,
            };

            const { handleQueue: newQueue, handleSnacks: newSnacks } =
                handleDisplaySnack([...queue, snack], snacks);

            setSnacks(newSnacks);
            setQueue(newQueue);

            return id;
        },
        [anchorOrigin, handleDisplaySnack, queue, snacks, variant],
    );

    const handleCloseSnack = useCallback((key: SnackbarKey) => {
        setSnacks((prevSnacks) => prevSnacks.filter((s) => s.key !== key));
        setQueue((prevQueue) => prevQueue.filter((snack) => snack.key !== key));
    }, []);

    const closeSnackbar = useCallback(
        (key: SnackbarKey): void => {
            const toBeClosed = snacks.find((s) => s.key === key);

            if (toBeClosed) {
                handleCloseSnack(key);
            }
        },
        [handleCloseSnack, snacks],
    );

    const contextValue = useMemo(
        () => ({ enqueueSnackbar, closeSnackbar }),
        [closeSnackbar, enqueueSnackbar],
    );

    useEffect(() => {
        if (snacks.length > 0) {
            setInitialAnchorOrigin(snacks[0].anchorOrigin);
        }
    }, [snacks]);

    const snackbar = (
        <AnimatePresence>
            {snacks.map((snack) => (
                <motion.div
                    key={snack.key}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: 0, duration: 0.3 }}
                >
                    <SnackbarItem
                        key={snack.key}
                        onClose={handleCloseSnack}
                        snack={snack}
                    />
                </motion.div>
            ))}
        </AnimatePresence>
    );

    return (
        <SnackbarContext.Provider value={contextValue}>
            {children}
            <SnackbarContainer anchorOrigin={initialAnchorOrigin}>
                {domRoot ? createPortal(snackbar, domRoot) : snackbar}
            </SnackbarContainer>
        </SnackbarContext.Provider>
    );
};
