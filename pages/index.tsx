// #region Global Imports
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// #endregion Global Imports

// #region Local Imports
import { Drawer, Modal, useSnackbar } from '@Components';
// #endregion Local Imports

type Props = {};

const HomeLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

function Home({}: Props): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
                <div>Test Content - Left</div>
            </Modal>
            <HomeLayout>
                <button
                    onClick={() => {
                        enqueueSnackbar(`${new Date()}`, {
                            variant: 'warning',
                        });
                    }}
                >
                    Open
                </button>
            </HomeLayout>
        </>
    );
}

export default Home;
