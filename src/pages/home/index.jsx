import { memo } from 'react'
import { View } from '@tarojs/components'
import { useLoad, useReachBottom } from '@tarojs/taro'
import {
  fetchHomeGoodsDataAction,
  fetchHomeInfoDataAction,
  fetchHomeRecommendDataAction,
  setCurrentTabName,
  tabTypes
} from '@/store/modules/home'
import { useDispatch, useSelector } from 'react-redux'
import TabControl from '@/components/tab-control'
import GridView from '@/components/grid-view'

import styles from './index.module.scss'
import HomeSearch from './cpns/home-search'
import HomeBanner from './cpns/home-banner'
import HomePopular from './cpns/home-popular'
import HomeRecommend from './cpns/home-recommend'

const Home = memo(function () {
  const dispatch = useDispatch()

  const { banners, populars, recommend, currentTabName, goodsList } =
    useSelector((state) => {
      return {
        banners: state.home.banners,
        populars: state.home.populars,
        recommend: state.home.recommend,
        currentTabName: state.home.currentTabName, // specific
        goodsList: state.home.goodsList
      }
    })

  useLoad(() => {
    dispatch(fetchHomeInfoDataAction())
    dispatch(fetchHomeRecommendDataAction())
    // type, // 0 -> 精选专场 ; 1 -> 精选单品
    // page, // 默认为 1 ,拿到第一页的数据
    dispatch(fetchHomeGoodsDataAction({ type: 0, page: 1 }))
    dispatch(fetchHomeGoodsDataAction({ type: 1, page: 1 }))
  })

  useReachBottom(() => {
    // 获取当前商品类型的下一页
    const nextPage = goodsList[currentTabName].page + 1
    const currentType = tabTypes[0] === currentTabName ? 0 : 1 // specific = 0 | single =1
    dispatch(fetchHomeGoodsDataAction({ type: currentType, page: nextPage }))
  })

  function handleTabItemClick(index) {
    // 触发一个同步的action
    dispatch(setCurrentTabName(tabTypes[index]))
  }

  return (
    <View className={styles['home']}>
      <HomeSearch></HomeSearch>
      <HomeBanner banners={banners}></HomeBanner>
      <HomePopular populars={populars}></HomePopular>
      <HomeRecommend recommend={recommend}></HomeRecommend>
      <TabControl
        titles={['精选专场', '精选单品']}
        onTabClick={handleTabItemClick}
      ></TabControl>
      <GridView goods={goodsList[currentTabName].list}></GridView>
    </View>
  )
})

export default Home
