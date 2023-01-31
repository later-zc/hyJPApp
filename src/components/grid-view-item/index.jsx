import { memo } from "react";
import { View, Image, Text } from "@tarojs/components";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const GridViewItem = memo(function (props) {
  const { goodInfo, onItemClick } = props;

  function handleItemClick() {
    onItemClick && onItemClick(goodInfo);
  }
  return (
    <View className={styles["grid-view-item"]} onClick={handleItemClick}>
      <Image
        className={styles["item-img"]}
        src={goodInfo.pic_url}
        mode="widthFix"
      ></Image>

      <View className={styles["item-price"]}>
        <Text className={styles["price"]}>{goodInfo.coupon_tips}</Text>
        <Image
          className={styles["logo"]}
          src={goodInfo.logo_url}
          mode="widthFix"
        ></Image>
      </View>

      <View className={styles["item-title"]}>
        <Text className={styles["title"]}>{goodInfo.title}</Text>
        <Text className={styles["tips"]}>{goodInfo.time_left}</Text>
      </View>
    </View>
  );
});
export default GridViewItem;
GridViewItem.propTypes = {
  goodInfo: PropTypes.object,
  onItemClick: PropTypes.func,
};
