import { memo } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import GridViewItem from "../grid-view-item";

const GridView = memo(function (props) {
  const { goods } = props;
  function handleItemClick(goodInfo) {
    console.log(goodInfo);
    Taro.navigateTo({
      url: '/pages/detail/index?link=' + goodInfo.goods_jump_url
    })
  }
  return (
    <View className={styles["grid-view"]}>
      {goods.map((goodInfo) => {
        return (
          <View className={styles["item"]} key={goodInfo.goods_id}>
            <GridViewItem
              goodInfo={goodInfo}
              onItemClick={handleItemClick}
            ></GridViewItem>
          </View>
        );
      })}
    </View>
  );
});
export default GridView;

GridView.propTypes = {
  goods: PropTypes.array,
};
