import { memo } from "react";
import { View, Image } from "@tarojs/components";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const HomePopular = memo(function (props) {
  const { populars } = props;

  return (
    <View className={styles["home-popular"]}>
      {populars.map((item) => {
        return (
          <Image
            key={item.id}
            className={styles["popular-img"]}
            src={item.pic}
            mode="widthFix"
          ></Image>
        );
      })}
    </View>
  );
});
export default HomePopular;
HomePopular.propTypes = {
  populars: PropTypes.array,
};
