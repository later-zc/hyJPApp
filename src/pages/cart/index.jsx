import { memo } from "react";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

const Cart = memo(function () {
  return (
    <View className={styles['cart']}>
      <Text>Hello world!</Text>
    </View>
  );
});
export default Cart;
