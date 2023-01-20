import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import { StyledEngineProvider } from '@mui/material/styles';

const store = setupStore()

ReactDOM.render(
    <Provider store={store}>
        <StyledEngineProvider>
            <App/>
        </StyledEngineProvider>
    </Provider>,

    document.getElementById('root')
);

