import hyRequest from "./index";

// 1.拿到首页bannber的数据
export const getHomeInfoData = () => {
  return hyRequest.get("/homeinfo", {});
};

// 2.拿到首页 populars 和 recommend 的数据
export const getRecommendData = () => {
  return hyRequest.get("/recommend", {});
};

// 3.拿到商品列表数据
export const getGoodsData = (type, page) => {
  return hyRequest.post("/goods", {
    type, // 0 -> 精选专场 ; 1 -> 精选单品
    page, // 默认为 1 ,拿到第一页的数据
  });
};
