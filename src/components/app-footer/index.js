import React,{ Fragment, memo } from 'react'



import {
    FooterWrapper,
    FooterLeft,
    FooterRight,
} from './styled'
import {detailLinks01,detailLinks02,detailLinks03,footerImages} from '@/common/local-data'
export default memo(function CAppFooter() {
    return (
        <div>
            <FooterWrapper>
                <div className='wrap-v2 content'>
                    <FooterLeft>
                        <div>
                            {detailLinks01.map((item,index) => {
                                if(index !== 6) {
                                    return (
                                    <Fragment key={index}>
                                        <a href={item.link} style={{color: "#c2c2c2"}} target= "_blank">{item.tittle}</a>
                                        <span style={{margin: "0 2px 0 4px",color: "#c2c2c2"}}>|</span>
                                    </Fragment>
                                    )
                                }else {
                                    return (<a href={item.link} style={{color: "#c2c2c2"}} target= "_blank" key={index}>{item.tittle}</a>)
                                }
                                
                            })}
                        </div>
                        <div>
                            {detailLinks02.map((item,index) => {
                                if(index !== 2) {
                                    return (<span style={{marginRight: "5px"}} key={index}>{item.tittle}</span>)
                                }else {
                                    return (<a href={item.link} key={index}>{item.tittle}</a>)
                                }
                            })}
                        </div>
                        <div>
                            <a href={detailLinks03[0].link} style={{marginRight: "5px"}}>{detailLinks03[0].tittle}</a>
                            <span></span>
                            <a href={detailLinks03[1].link}>{detailLinks03[1].tittle}</a>
                        </div>
                    </FooterLeft>
                    <FooterRight>
                        {
                            footerImages.map((item, index) => {
                                return (
                                <li className="item" key={item.link}>
                                    <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                                    <span className="title">{item.title}</span>
                                </li>
                                )
                            })
                        }
                    </FooterRight>
                </div>
            </FooterWrapper>
        </div>
    )
})