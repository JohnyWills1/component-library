import { useContext } from 'react';
import { ProviderContext, SnackbarContext } from './SnackbarProvider';

export const useSnackbar = (): ProviderContext => useContext(SnackbarContext);
