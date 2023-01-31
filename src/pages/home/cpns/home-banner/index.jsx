import { memo } from 'react'
import PropTypes from 'prop-types'
import { Image, Swiper, SwiperItem } from '@tarojs/components'

import styles from './index.module.scss'

const HomeBanner = memo((props) => {
  const { banners } = props
  return (
    <Swiper
      className={styles['home-banner']}
      indicatorDots
      indicatorColor="#999"
      indicatorActiveColor="#ff464e"
      autoplay
      interval={3000}
    >
      {banners.map((item) => {
        return (
          <SwiperItem key={item.id}>
            <Image
              className={styles['banner-img']}
              src={item.pic}
              mode="widthFix"
            ></Image>
          </SwiperItem>
        )
      })}
    </Swiper>
  )
})

HomeBanner.propTypes = {
  banners: PropTypes.array
}

export default HomeBanner
