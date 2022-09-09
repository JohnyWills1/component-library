// #region Global Imports
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// #endregion Global Imports

// #region Local Imports
import { Drawer } from '@Components';
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

    return (
        <>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                placement="left"
            >
                <div>Test Content - Left</div>
            </Drawer>
            <HomeLayout>
                <button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    Open - Left
                </button>
            </HomeLayout>
        </>
    );
}

export default Home;
