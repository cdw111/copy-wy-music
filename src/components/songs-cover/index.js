import React,{ memo } from 'react'
import { SongsCoverWrapper } from './style'
import { getCount,getSizeImage } from '@/utils/format-utils';
export default memo(function CSongsCover(props) {
    const {info} = props;
    return (
        <SongsCoverWrapper>
            <div className='cover-top'>
                <img src={getSizeImage(info.picUrl,140)} alt=" "></img>
                <div className='cover'>
                    <div className='info sprite_cover'>
                        <span>
                            <i className='sprite_icon erji'></i>
                            {getCount(info.playCount)}
                        </span>
                    </div>
                </div>
            </div>
            <div className='cover-bottom text-nowrap'>
                <a>{info.name}</a>
            </div>
            <div className='cover-source'>
                by {info.copywriter || "cdw"}
            </div>
        </SongsCoverWrapper>
    )
})