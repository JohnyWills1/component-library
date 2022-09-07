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
    const [isOpenLeft, setIsOpenLeft] = useState(false);
    const [isOpenRight, setIsOpenRight] = useState(false);
    const [isOpenTop, setIsOpenTop] = useState(false);
    const [isOpenBottom, setIsOpenBottom] = useState(false);

    useEffect(() => {
        console.log('Left', isOpenLeft);
        console.log('Right', isOpenRight);
        console.log('Top', isOpenTop);
        console.log('Bottom', isOpenBottom);
    }, [isOpenLeft, isOpenRight, isOpenTop, isOpenRight]);

    return (
        <>
            <Drawer
                isOpen={isOpenLeft}
                onClose={() => setIsOpenLeft(false)}
                placement="left"
            >
                <div>Test Content - Left</div>
                <button onClick={() => setIsOpenLeft(false)}>
                    Close Drawer
                </button>
            </Drawer>
            <Drawer
                isOpen={isOpenRight}
                onClose={() => setIsOpenRight(false)}
                placement="right"
            >
                Test Content - Right
            </Drawer>
            <Drawer
                isOpen={isOpenTop}
                onClose={() => setIsOpenTop(false)}
                placement="top"
            >
                Test Content - Top
            </Drawer>
            <Drawer
                isOpen={isOpenBottom}
                onClose={() => setIsOpenBottom(false)}
                placement="bottom"
            >
                Test Content - Bottom
            </Drawer>
            <HomeLayout>
                <button
                    onClick={() => {
                        setIsOpenLeft(true);
                    }}
                >
                    Open - Left - {JSON.stringify(isOpenLeft)}
                </button>
                <button
                    onClick={() => {
                        setIsOpenRight(true);
                    }}
                >
                    Open - Right
                </button>
                <button
                    onClick={() => {
                        setIsOpenTop(true);
                    }}
                >
                    Open - Top
                </button>
                <button
                    onClick={() => {
                        setIsOpenBottom(true);
                    }}
                >
                    Open - Bottom
                </button>
            </HomeLayout>
        </>
    );
}

export default Home;
