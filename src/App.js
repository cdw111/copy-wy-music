//一般第一行导入第三方库
import React,{ memo, useState , Suspense } from 'react'
import {HashRouter, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
//第二行导入网络请求  util 等等

//import routes from './router'



//第三行导入组件
import CAppHeader from '@/components/app-header'
import CAppFooter from '@/components/app-footer'
import ToRoutes from './router'
import store from './store'
import PlayBar from './pages/player/app-player-bar'
import UserLogin from './components/user-login'
import { useLogin } from './utils/my-hooks'
export default memo(function App() {
    const [login,setLogin] = useLogin()
    return (
        <Provider store={store}>
            <HashRouter>
                <CAppHeader/>
                <Suspense fallback={<div>路由懒加载...</div>}>
                    <ToRoutes/>
                </Suspense>
                <CAppFooter/>
                <PlayBar></PlayBar>
            </HashRouter>
            {/* {
                login ? <UserLogin></UserLogin> : <div></div>
            } */}
        </Provider>
    )
})