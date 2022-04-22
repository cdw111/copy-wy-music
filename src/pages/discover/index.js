import React,{ memo, useEffect } from 'react';
import { discoverMenu } from '@/common/local-data';
import {
    DiscoverWrapper,
    TopMenu
} from './style'
import { NavLink,Outlet } from 'react-router-dom';
import request from '@/service/request'
export default memo(function CDiscover() {
    // useEffect(() => {
    //     request({
    //         url: "/banner"
    //     }).then(res => {
    //         //console.log(res)
    //     })
    // },[])
    return (
        <div>
            <DiscoverWrapper>
                <div className='top'>
                    <TopMenu className='wrap-v1'>
                        {
                            discoverMenu.map((item,index) => {
                                return (
                                    <div className='item' key={index}>
                                        <NavLink to={item.link}>{item.tittle}</NavLink>
                                    </div>
                                )
                            })
                        }
                        
                    </TopMenu>
                    
                </div>
                <div>
                    <Outlet/>
                </div>
            </DiscoverWrapper>
        </div>
    )
})