import React,{ memo, useCallback, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd';
import { PlaybarWrapper,Control,PlayInfo,Operator } from './style'
import { getSongDetailAction,changeSequenceAction,changeCurrentSong } from '../store/actionCreators';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {getSizeImage,formatTime,getPlaySong} from '@/utils/format-utils'
import { NavLink } from 'react-router-dom';
export default memo(function PlayerBar() {
    const [currentTime,setCurrentTime] = useState(0)
    const [progress,setProgress] = useState(0)
    const [isChange,setIsChange] = useState(false)
    const [isPlaying,setIsPlaying] = useState(false)
    const {currentSong,sequence} = useSelector(state => ({
        currentSong: state.getIn(["player","currentSong"]),
        sequence: state.getIn(["player","sequence"])
    }),shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    },[dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        audioRef.current.play().then(res => {
            setIsPlaying(true)
        }).catch(err => {
            setIsPlaying(false)
        })
    },[currentSong])
    const audioRef = useRef()
    const al = currentSong.al || {picUrl: ""}
    const ar = currentSong.ar || [{name: ""}]
    const name = currentSong.name || ""
    const duration = currentSong.dt || 0; 
    const startMusic = useCallback(() => {
        !isPlaying ? audioRef.current.play() : audioRef.current.pause()
        setIsPlaying(!isPlaying)
    },[isPlaying])
    const timeUpdate = (e) => {
        
        if(!isChange) {
            setCurrentTime(e.target.currentTime * 1000)
            setProgress(currentTime / duration *100)
        }
    }
    const sliderChange = useCallback((value) => {
        setIsChange(true)
        setCurrentTime(value / 100 * duration)
        setProgress(value)
    },[duration])
    const sliderAfterChange = useCallback((value) => {
        audioRef.current.currentTime = value / 100 * duration /1000
        setCurrentTime(audioRef.current.currentTime * 1000)//再次保存一次时间来防止 timeUpdate回调慢引起的回退
        setIsChange(false)
        if(!isPlaying) {
            startMusic()
        }
    },[duration,isPlaying,startMusic])
    const change = () => {
        let currentSequence = sequence + 1
        if(currentSequence > 2) {
            currentSequence = 0
        }
        dispatch(changeSequenceAction(currentSequence))
    }
    const changeMusic = (type) => {
        dispatch(changeCurrentSong(type))
    }
    const timeEnd = () => {
        if(sequence === 2) {
            //单曲循环
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }else{
            dispatch(changeCurrentSong(1))
        }
    }
    return (
        <PlaybarWrapper className='sprite_player'>
            <div className='content wrap-02'>
                <Control isPlaying={isPlaying}>
                    <button className='sprite_player prev' onClick={e => {changeMusic(-1)}}></button>
                    <button className='sprite_player play' onClick={e => {startMusic()}}></button>
                    <button className='sprite_player next' onClick={e => {changeMusic(1)}}></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <NavLink to="player">
                            <img src={getSizeImage(al.picUrl,35)} alt=''></img>
                        </NavLink>
                    </div>
                    <div className='info'> 
                        <div className='song'>
                            <span className='song-name'>{name}</span>
                            <span className='singer-name'>{ar[0].name}</span>
                        </div>
                        <div className='progress'>
                            <Slider defaultValue={30} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange}/>
                            <span className='now-time'>{formatTime(currentTime)}</span>
                            <span className='divider'>/</span>
                            <span className='duration'>{formatTime(duration)}</span>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className='left'>
                        <button className='sprite_player btn favor'></button>
                        <button className='sprite_player btn share'></button>
                    </div>
                    <div className='right sprite_player'>
                        <button className='sprite_player btn volume'></button>
                        <button className='sprite_player btn loop' onClick={e => {change()}}></button>
                        <button className='sprite_player btn playlist'></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnd}></audio>
        </PlaybarWrapper>
    )
})




