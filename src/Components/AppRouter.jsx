import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/route';

export const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.component} />
                )}
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.component} />
                )}
                <Route path="/*" element={<Navigate to="/posts" replace />} />F
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.component} />
                )}
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.component} />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />F
            </Routes>

    )
}
