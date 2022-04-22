import React,{ memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import CThemeRecHeader from '@/components/theme-recommendheader'
import {
    AlbumWrapper
} from './style'
import { getNewAlbumAction } from '../../store/actionCreators'
import AlbumCover from '@/components/album-cover'

export default memo(function NewAblum() {


    const pageRef = useRef()
    const {newAlbums} = useSelector(state => {
        return {
            newAlbums: state.getIn(["recommend","newAlbums"])
        }
    },shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getNewAlbumAction(10)) 
    },[dispatch])
    return (
        <AlbumWrapper>
            <CThemeRecHeader tittle={"新碟上架"} keywords={[]}/>
            <div className='content'>
                <button className='arrow arrow-left sprite_02' onClick={e => {pageRef.current.prev()}}></button>
                <div className='album'>
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0,1].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbums.slice(item*5,(item+1)*5).map(it => {
                                                return (
                                                    <AlbumCover key={it.id} info={it} size={100} width={118} bgp={-570}>{it.name}</AlbumCover>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div> 
                <button className='arrow arrow-right sprite_02' onClick={e => {pageRef.current.next()}}></button>
            </div>     
        </AlbumWrapper>
    )
})