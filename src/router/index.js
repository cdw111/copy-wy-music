import React from 'react';
import CDiscover from '@/pages/discover'
import CFriends from '@/pages/friends'
import CMine from '@/pages/mine'
import { Navigate, useRoutes } from 'react-router-dom';
import CDJ from '@/pages/discover/c-pages/dj';
import CRanking from '@/pages/discover/c-pages/ranking';
import CSinger from '@/pages/discover/c-pages/singer';
import CSongs from '@/pages/discover/c-pages/songs';
import CAlbum from '@/pages/discover/c-pages/album';
import CRecommend from '@/pages/discover/c-pages/recommend';
import CPlayer from '@/pages/player'
const ToRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            exact: true,
            // render: () => {
            //     return <Navigate to="/discover"/>
            // }
            element: <Navigate to="/discover"/>
        },
        {
            path: "/discover",
            exact: true,
            element: <CDiscover/>,
            children: [
                {
                    path: "",
                    exact: true,
                    element: <CRecommend/>
                },
                {
                    path: "recommend",
                    exact: true,
                    element: <CRecommend/>
                },
                {
                    path: "dj",
                    exact: true,
                    element: <CDJ/>
                },
                {
                    path: "singer",
                    exact: true,
                    element: <CSinger/>
                },
                {
                    path: "songs",
                    exact: true,
                    element: <CSongs/>
                },
                {
                    path: "ranking",
                    exact: true,
                    element: <CRanking/>
                },
                {
                    path: "album",
                    exact: true,
                    element: <CAlbum/>
                },
            ]
        },
        {
            path: "/mine",
            exact: true,
            element: <CMine/>
        },
        {
            path: "/friends",
            exact: true,
            element: <CFriends/>
        },
        {
            path: "/player",
            exact: true,
            element: <CPlayer/>
        }
    ])
    return routes;
}

export default ToRoutes;