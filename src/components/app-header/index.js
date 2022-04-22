import React,{ memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks} from '@/common/local-data'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { 
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
 } from './style'
export default memo(function CAppHeader() {

    const showSelectItem = (item,index) => {
        if(index < 3) {
            return (
                <NavLink to={item.link}>{item.tittle}<i className='sprite_01 icon'></i></NavLink>
            )
        }else {
            return (
                <a href={item.link}>{item.tittle}</a>
            )
        }
    }





    return (
        <HeaderWrapper>
            <div className="content wrap-v1">

                <HeaderLeft>
                    <a href='#/' className='logo sprite_01'>网易云音乐</a>
                    <div className='select-list'>
                        {
                            headerLinks.map((item,index) => {
                                return (
                                    <div key={index} className="select-item">
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
                    <div className='center'>创作者中心</div>
                    <a className='user-login'>登录</a>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
        
    )
})