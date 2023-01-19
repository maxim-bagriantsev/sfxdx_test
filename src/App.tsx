import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {IndexPage} from "./pages/index/IndexPage";
import {frontendRoutes} from "./utils/router/routes";

function App() {
    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.UserReducer)
    const {removeUser} = useAppSelector(state => state.RemoveUserSlice)

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    const removedUser = (user: {}) => {
        // @ts-ignore
        dispatch(remUser(user.id))
    }

    return (
       <BrowserRouter>
           <Routes>
               {/* Index/main page */}
               <Route path={frontendRoutes.mainPage} element={<IndexPage />} />
           </Routes>
       </BrowserRouter>
    );
}

export default App;
