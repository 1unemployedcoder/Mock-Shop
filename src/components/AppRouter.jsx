import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {AuthContext} from "../context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <MyLoader />
    }

    return (
        <Routes>
            {isAuth
                ? <Route>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.element}
                            element={route.element}
                            path={route.path}
                            caseSensitive={route.caseSensitive}
                        />
                    )}
                </Route>
                : <Route>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.element}
                            element={route.element}
                            path={route.path}
                            caseSensitive={route.caseSensitive}
                        />
                    )}
                </Route>
            }
        </Routes>
    );
};

export default AppRouter;