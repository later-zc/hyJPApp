import { memo } from "react";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

const Category = memo(function () {
  return (
    <View className={styles["category"]}>
      <Text>category</Text>
    </View>
  );
});
export default Category;
