import React,{ memo } from 'react'
import { RecommendWrapper,Content,CLeft,CRight } from './style';
import CTopBanner from './c-cpns/topBanner'
import HotRecommend from './c-cpns/hotRecommend'
import CUserLogin from './c-cpns/user-login'
import CSettleSinger from './c-cpns/settle-singer'
import CHotRadio from './c-cpns/hot-radio'
import NewAblum from './c-cpns/new-ablums'
import RecommendRanking from './c-cpns/rec-ranking'
//利用redux的hooks来简化代码
function CRecommend(props) {

   
    return (
        <RecommendWrapper>
            <CTopBanner></CTopBanner>
            <Content className='wrap-v2'>
                <CLeft>
                    <HotRecommend/>
                    <NewAblum/>
                    <RecommendRanking/>
                </CLeft>
                <CRight>
                    <CUserLogin></CUserLogin>
                    <CSettleSinger></CSettleSinger>
                    <CHotRadio></CHotRadio>
                </CRight>
            </Content>
        </RecommendWrapper>
    )
}


//返回一个高阶封装函数
export default memo(CRecommend)
// function CRecommend(props) {
//     const {getBanners,topBanners} = props
//     //发起网络请求
//     useEffect(() => {
//         getBanners()
//         console.log(props)
//     },[getBanners])
//     return (
//         <div>
//             CRecommend{topBanners.length}
//         </div>
//     )
// }
// const mapStateProps = state => {
//     return {
//         topBanners: state.recommend.topBanners,
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         getBanners: () => {
//             dispatch(getTopBannerAction())
//         }
//     }
// }

// //返回一个高阶封装函数
// export default connect(mapStateProps,mapDispatchToProps)(memo(CRecommend))