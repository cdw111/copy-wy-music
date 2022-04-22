import * as actionType from './constants'
import { getTopBanners } from '@/service/recommend'
import { getHotRecommends } from '@/service/recommend'
import { getNewAlbums } from '@/service/recommend'
import { getTopList } from '@/service/recommend'


const changeTopBannerAction = (res) => ({
    type: actionType.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
})
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

const changeHotRecommendAction = (res) => ({
    type: actionType.CHANGE_Hot_RECOMMEND,
    hotRecommends: res.result,
})

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })    }
}

const changeNewAlbumAction = (res) => ({
    type: actionType.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})

export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

const changeUpRankingAction = (res) => ({
    type: actionType.CHANGE_UP_RANKING,
    upRanking: res.playlist
})
const changeNewRankingAction = (res) => ({
    type: actionType.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})
const changeOrgRankingAction = (res) => ({
    type: actionType.CHANGE_ORG_RANKING,
    orgRanking: res.playlist
})
export const getTopListsAction = (idx) => {
    
    return dispatch => {
        getTopList(idx).then(res => {
            switch(idx) {
                case 0:
                    dispatch(changeUpRankingAction(res));
                    break;
                case 2:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 3:
                    dispatch(changeOrgRankingAction(res));
                    break;
                default:
            }
        })
    }
}