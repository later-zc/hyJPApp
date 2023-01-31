export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/profile/index',
    'pages/detail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ff464e',
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#ff464e',
    list: [
      {
        text: '首页',
        pagePath: 'pages/home/index',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home_active.png'
      },
      {
        text: '分类',
        pagePath: 'pages/category/index',
        iconPath: 'assets/images/tabbar/category.png',
        selectedIconPath: 'assets/images/tabbar/category_active.png'
      },
      {
        text: '购物车',
        pagePath: 'pages/cart/index',
        iconPath: 'assets/images/tabbar/cart.png',
        selectedIconPath: 'assets/images/tabbar/cart_active.png'
      },
      {
        text: '我的',
        pagePath: 'pages/profile/index',
        iconPath: 'assets/images/tabbar/profile.png',
        selectedIconPath: 'assets/images/tabbar/profile_active.png'
      }
    ]
  }
})
