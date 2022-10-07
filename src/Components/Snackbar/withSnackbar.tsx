import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { SnackbarContext } from './SnackbarProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withSnackbar = (Component: any) => {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <SnackbarContext.Consumer>
      {(context) => (
        <Component
          {...props}
          ref={ref}
          enqueueSnackbar={context.enqueueSnackbar}
          closeSnackbar={context.closeSnackbar}
        />
      )}
    </SnackbarContext.Consumer>
  ));

  WrappedComponent.displayName = `WithSnackbar`;

  hoistNonReactStatics(WrappedComponent, Component);

  return WrappedComponent;
};
