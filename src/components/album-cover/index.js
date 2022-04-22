import React,{ memo } from 'react'
import { AlbumWrapper } from './style'
import {getSizeImage} from '@/utils/format-utils'

export default memo(function CAlbumsCover(props) {
    const {info,size = 130,width = 153,bgp = "-845px"} = props
    return (
        <AlbumWrapper size={size} width={width} bgp={bgp}>
            <div className='album-image'>
                <img src={getSizeImage(info.picUrl,size)} alt=""></img>
                <a href='/todu' className='cover image_cover'></a>
            </div>
            <div className='albums-info no-wrap'>
                <div className='artist no-wrap'>{info.artist.name}</div>
            </div>
        </AlbumWrapper>
    )
})