//一般第一行导入第三方库
import React,{ memo } from 'react'
import {HashRouter, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
//第二行导入网络请求  util 等等

import routes from './router'



//第三行导入组件
import CAppHeader from '@/components/app-header'
import CAppFooter from '@/components/app-footer'
import ToRoutes from './router'
import store from './store'
import PlayBar from './pages/player/app-player-bar'
export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <CAppHeader/>
                <ToRoutes/>
                <CAppFooter/>
                <PlayBar></PlayBar>
            </HashRouter>
        </Provider>
    )
})