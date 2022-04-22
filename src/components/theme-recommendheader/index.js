import React,{ memo } from 'react'

import {
    HeaderWrapper
}from './style'
export default memo(function CThemeRecHeader(props) {
    const {tittle,keywords=[]} = props;
    // const tittle = "热么推荐";
    // const keywords = ["aasd","asd","asddf"]
    return (
        <HeaderWrapper>
            <div className='left'>
                <h3 className='title'>{tittle}</h3>
                <div className='keyword'>
                    {
                        keywords.map((item,index) => {
                            if(index !== keywords.length - 1) {
                                return (
                                <div className='item' key={index}>
                                    <a href='todu'>{item}</a>
                                    <span className='divider'>|</span>
                                </div>
                            )}else{
                                return (
                                    <div className='item' key={index}>
                                        <a href='todu'>{item}</a>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a href='todu'>更多</a>
                <i className='icon sprite_02'></i>
            </div>
        </HeaderWrapper>
    )
})