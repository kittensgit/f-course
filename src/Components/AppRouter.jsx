import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/route';
import { AuthContext } from '../context';
import { Loader } from './UI/loader/Loader';

export const AppRouter = () => {

    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component} />
                )}
                <Route path="/*" element={<Navigate to="/posts" replace />} />F
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component} />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />F
            </Routes>
    )
}
