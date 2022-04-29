import React from 'react';

import { Navigate, useRoutes } from 'react-router-dom';
//import CDiscover from '@/pages/discover'
// import CFriends from '@/pages/friends'
// import CMine from '@/pages/mine'
// import CDJ from '@/pages/discover/c-pages/dj';
// import CRanking from '@/pages/discover/c-pages/ranking';
// import CSinger from '@/pages/discover/c-pages/singer';
// import CSongs from '@/pages/discover/c-pages/songs';
// import CAlbum from '@/pages/discover/c-pages/album';
// import CRecommend from '@/pages/discover/c-pages/recommend';
// import CPlayer from '@/pages/player'
const CDiscover = React.lazy(() => import("@/pages/discover"));
const CMine = React.lazy(() => import("@/pages/mine"));
const CDJ = React.lazy(() => import("@/pages/discover/c-pages/dj"));
const CFriends = React.lazy(() => import("@/pages/friends"));
const CRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const CSinger = React.lazy(() => import("@/pages/discover/c-pages/singer"));
const CSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const CAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const CRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const CPlayer = React.lazy(() => import("@/pages/player"));

const ToRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            exact: true,
            // render: () => {
            //     return <Navigate to="/discover"/>
            // }
            element: <Navigate to="/discover"/>
            //redirect: <CDiscover/>
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