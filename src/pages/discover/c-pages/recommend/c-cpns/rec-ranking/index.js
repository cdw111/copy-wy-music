import React,{ memo, useEffect } from 'react'
import CThemeRecHeader from '@/components/theme-recommendheader'
import {
    RankingWrapper
} from './style'
import CTopRanking from '@/components/top-ranking'
import { useDispatch, useSelector } from 'react-redux'
import { getTopListsAction } from '../../store/actionCreators'
export default memo(function RecommendRanking() {

    const {upRanking,newRanking,orgRanking} = useSelector(state => ({
        upRanking: state.getIn(["recommend","upRanking"]),
        newRanking: state.getIn(["recommend","newRanking"]),
        orgRanking: state.getIn(["recommend","orgRanking"]),
    }))
    //console.log(upRanking)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopListsAction(0))
        dispatch(getTopListsAction(2))
        dispatch(getTopListsAction(3))
    },[dispatch])


    return (
        <RankingWrapper>
            <CThemeRecHeader tittle={"榜单"} keywords={[]}/>
            <div className='tops'>
                <CTopRanking info={upRanking}></CTopRanking>
                <CTopRanking info={newRanking}></CTopRanking>
                <CTopRanking info={orgRanking}></CTopRanking>
            </div>
        </RankingWrapper>
    )
})