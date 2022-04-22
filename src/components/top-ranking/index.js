import React,{ memo } from 'react'

import {getSizeImage} from '@/utils/format-utils'
import { TopRankingWrapper } from './style'
import { useDispatch } from 'react-redux'
import { getSongDetailAction } from '@/pages/player/store/actionCreators';
export default memo(function CTopRanking(props) {
    const {info = []} = props
    info.tracks = info.tracks || []
    const dispatch = useDispatch()
    function change(id) {
        dispatch(getSongDetailAction(id))
    }
    return (
        <TopRankingWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={getSizeImage(info.coverImgUrl)}></img>
                    <a href='/todu' className='image_cover'>ranking</a>
                </div>
                <div className='info'>
                    <a href='/todu'>{info.name}</a>
                    <div>
                        <button className='btn play sprite_02 '></button>
                        <button className='btn favor sprite_02 '></button>
                    </div>
                </div>
            </div>
            <div className='list'>
                {
                    info.tracks.slice(0,10).map((item,index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className='rank'>{index + 1}</div>
                                <div className='info'>
                                    <div className='name'>{item.name}</div>
                                    <div className='operate'>
                                        <button className='btn sprite_02 play' onClick={e => {change(item.id)}}></button>
                                        <button className='btn sprite_icon2 addto'></button>
                                        <button className='btn sprite_02 favor'></button>
                                    </div>
                                </div> 
                            </div>
                        )
                    })
                }
            </div>
            <div className='footer'>
                <a href='/tudo'>查看全部&gt;</a>
            </div>
        </TopRankingWrapper>
    )
})