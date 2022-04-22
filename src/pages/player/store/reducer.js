
import { Map } from 'immutable'
import * as actionType from './constants'
const defaultState = Map({
    currentSong:{},
    currentSongIndex: 0,
    playList: [],
    sequence: 0,//0循环  1随机   2单曲循环
    lyricList:[],
})

export function reducer(state = defaultState,action) {
    switch(action.type) {
        case actionType.CHANGE_CURRENT_SONG:
            return state.set("currentSong",action.currentSong)
        case actionType.CHANGE_PLAY_LIST:
            return state.set("playList",action.playList)
        case actionType.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex",action.currentSongIndex)
        case actionType.CHANGE_SEQUENCE:
            return state.set("sequence",action.sequence)
        case actionType.CHANGE_LYRICS:
            return state.set("lyricList",action.lyricList)
        default:
            return state
    }
}