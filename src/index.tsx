import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {StyledEngineProvider} from '@mui/material/styles';

const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <StyledEngineProvider>
                <App/>
            </StyledEngineProvider>
        </Provider>,
    </React.StrictMode>
);

