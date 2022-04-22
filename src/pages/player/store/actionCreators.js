import { getSongDetail,getLyric } from '@/service/player';
import * as actionTypes from './constants';
import { parseLyric } from '@/utils/parseLyric';
const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})
const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
})
const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})
const changeLyricList = (lyricList) => ({
    type: actionTypes.CHANGE_LYRICS,
    lyricList
})
export const changeCurrentSong = (type) => {
    return (dispatch,getState) => {
        const sequence = getState().getIn(["player","sequence"])
        let currentSongIndex = getState().getIn(["player","currentSongIndex"])
        const playList = getState().getIn(["player","playList"])
        switch(sequence) {
            case 1:
                currentSongIndex = Math.floor(Math.random() * playList.length)
                break;
            case 2:
                currentSongIndex = currentSongIndex
                break;
            default:
                currentSongIndex += type
                if(currentSongIndex >= playList.length) {
                    currentSongIndex = 0
                }
                if(currentSongIndex < 0) {
                    currentSongIndex = playList.length - 1
                }
                break;
        }
        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(getLyricAction(currentSong.id))
    }
}

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})
export const getSongDetailAction = (ids) => {
    return (dispatch,getState) => {
        //根据id查找playlist是否有该歌曲
        const playList = getState().getIn(["player","playList"])
        const songIndex = playList.findIndex(item => item.id === ids)
        let song = null
        if(songIndex !== -1) {
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))
        }else {
            //没找到请求
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0]
                if(!song) {
                    return
                }
                const newPlayList = [...playList]
                newPlayList.push(song)
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                dispatch(changeCurrentSongAction(song))
                //请求歌词
                if(!song) {
                    return
                }
                dispatch(getLyricAction(song.id))
            })
        } 
        
    }
}



export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyrics = parseLyric(res.lrc.lyric)
            dispatch(changeLyricList(lyrics))
        })
    }
}