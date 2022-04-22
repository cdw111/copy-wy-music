import React,{ memo } from 'react'
import { useSelector } from 'react-redux'

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style'
export default memo(function CPlayer() {
    const {lyricList} = useSelector(state => ({
        lyricList: state.getIn(["player","lyricList"])
    }))
    return (
        <PlayerWrapper>
            <div className='content wrap-v2'>
                <PlayerLeft>
                    {
                        lyricList.map((item,index) => {
                            return (
                                <h2 key={index}>{item.content}</h2>
                            )
                        })
                    }
                </PlayerLeft>
                <PlayerRight>
                    <h2>SD</h2>
                    <h2>sSIMIsongs</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})