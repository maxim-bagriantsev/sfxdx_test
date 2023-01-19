import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {IndexPage} from "./pages/index/IndexPage";
import {frontendRoutes} from "./utils/router/routes";
import { Web3ReactProvider } from '@web3-react/core';
import {Web3Provider} from "@ethersproject/providers";
import './assets/global.scss';

function App() {
    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.UserReducer)
    const {removeUser} = useAppSelector(state => state.RemoveUserSlice)

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
               <Route path={frontendRoutes.mainPage} element={<IndexPage />} />
           </Routes>
           </Web3ReactProvider>
       </BrowserRouter>
    );
}

export default App;
