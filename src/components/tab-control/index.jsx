import { memo, useState } from 'react'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.module.scss'

const TabControl = memo(function (props) {
  const { titles, onTabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function handleTabItemClick(index) {
    setCurrentIndex(index)
    onTabClick && onTabClick(index)
  }
  return (
    <View className={styles['tab-control']}>
      {titles.map((title, index) => {
        return (
          <View
            className={classNames(
              styles['tab-item'],
              currentIndex === index ? styles['active'] : ''
            )}
            key={title}
            onClick={() => handleTabItemClick(index)}
          >
            {title}
          </View>
        )
      })}
    </View>
  )
})

TabControl.propTypes = {
  titles: PropTypes.array,
  onTabClick: PropTypes.func
}

export default TabControl
