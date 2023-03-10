import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {frontendRoutes} from "./utils/router/routes";
import {Web3ReactProvider} from '@web3-react/core';
import {Web3Provider} from "@ethersproject/providers";
import './assets/global.scss';

//iu
import {IndexPage} from "./pages/index/IndexPage";


function App() {
    function getLibrary(provider: any): Web3Provider {
        const library = new Web3Provider(provider)
        library.pollingInterval = 12000
        return library
    }

    return (
        <BrowserRouter>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Routes>
                    {/* Index/main page */}
                    <Route path={frontendRoutes.mainPage} element={<IndexPage/>}/>
                </Routes>
            </Web3ReactProvider>
        </BrowserRouter>
    );
}

export default App;
