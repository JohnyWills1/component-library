// #region Global Imports
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
// #endregion Global Imports

// #region Type Imports
import { ReactPortalProps } from './types';
// #endregion Type Imports

const createWrapperAndAppendToBody = (id: string) => {
    const wrapper = document.createElement('div');
    wrapper.id = id;
    document.body.appendChild(wrapper);
    return wrapper;
};

export const ReactPortal = ({ children, id }: ReactPortalProps) => {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
        null,
    );

    useLayoutEffect(() => {
        let portalRoot = document.getElementById(id);
        let systemCreated = false;

        if (!portalRoot) {
            systemCreated = true;
            portalRoot = createWrapperAndAppendToBody(id);
        }

        setWrapperElement(portalRoot);

        return () => {
            if (systemCreated && portalRoot && portalRoot.parentNode) {
                portalRoot.parentNode.removeChild(portalRoot);
            }
        };
    }, [id]);

    if (wrapperElement === null) {
        return null;
    }

    return createPortal(children, wrapperElement);
};
