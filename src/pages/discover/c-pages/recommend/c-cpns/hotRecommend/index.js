import React,{ memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'



import CThemeRecHeader from '@/components/theme-recommendheader'
import CSongsCover from '@/components/songs-cover'
import {
    HotRecommendWrapper
} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'
export default memo(function HotRecommend() {
const {hotRecommends} = useSelector(state => {
    return {
        hotRecommends: state.getIn(["recommend","hotRecommends"])
    }
},shallowEqual)
const dispatch = useDispatch();


useEffect(() => {
    dispatch(getHotRecommendAction(8))
},[dispatch])

    return (
        <HotRecommendWrapper>
            <CThemeRecHeader tittle={"热门推荐"} keywords={["华语","流行","民谣","摇滚","电子"]}/>
            <div className='recommend-list'>
                {
                    hotRecommends.map((item) => {
                        return (
                            <CSongsCover key={item.id} info={item}></CSongsCover>
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})