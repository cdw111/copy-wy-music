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
import { useLogin } from '../../utils/my-hooks'
import UserLogin from '@/components/user-login'
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
    const [login,setLogin] = useLogin()

    const userlogin = () => {
        document.body.style.overflow = 'hidden'
        setLogin(!login)
        console.log(login)
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
                    <div className='user-login'onClick={e => userlogin()} >登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
            {
                login ? <UserLogin></UserLogin> : <div></div>
            }
        </HeaderWrapper>
        
    )
})