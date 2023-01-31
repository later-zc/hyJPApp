import { memo } from 'react'
import { View, Image, Text } from '@tarojs/components'

import LeftSearchImg from '@/assets/images/search_icon.png'
import RightSearchImg from '@/assets/images/search.png'

import styles from './index.module.scss'

const HomeSearch = memo(function () {
  return (
    <View className={styles['home-search']}>
      <View className={styles['search-panel']}>
        <Image
          className={styles['left-search-img']}
          mode="widthFix"
          src={LeftSearchImg}
        ></Image>
        <View className={styles['name']}>
          <Text className={styles['sub-name']}>搜索</Text>
        </View>
      </View>
      <Image
        className={styles['right-search-img']}
        mode="widthFix"
        src={RightSearchImg}
      ></Image>
    </View>
  )
})

export default HomeSearch
