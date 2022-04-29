import React,{ memo,useCallback,useEffect,useRef, useState } from 'react'
import { connect, useDispatch, useSelector,shallowEqual } from 'react-redux'
import { Carousel } from 'antd';
import { getTopBannerAction } from '../../store/actionCreators'
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl    
} from './style'
export default memo(function CTopBanner() {


    const [currentIndex,setCurrentIndex] = useState(0)
    //其他hooks
    const bannerRef = useRef()

    //传入一个回调函数  会传参state   返回值可以接受
    const {topBanners} = useSelector(state => {
        return {
            // topBanners: state.recommend.get("topBanners"),
            topBanners: state.getIn(["recommend","topBanners"])
            //库提供的连续调用的函数先找recommend再找topBanners
        }
    },shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction())
    },[dispatch])

    
    const change = useCallback((from,to) => {
        //1.进行改为after
        //2.改为异步操作  以防影响后续代码的执行
        setTimeout(() => {
            setCurrentIndex(to)
        },0)
        
    },[])

    const bgImage = topBanners[currentIndex]?.imageUrl + "?imageView&blur=40x20"
    return (
        <BannerWrapper bgImage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={change}>
                        {
                            topBanners.map((item,index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl}></img>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className='left btn' onClick={e => {bannerRef.current.prev()}}></button>
                    <button className='right btn'onClick={e => {bannerRef.current.next()}}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})