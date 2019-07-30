//页面初始数据
Page({
  data: {
    // 轮播图数组
    swiperList:[],
  },

  //页面加载
  onLoad(){
    this.getSwiperList()
  },

  //获取轮播图数据
  getSwiperList(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result) => {
        // console.log(result);
        // console.log(result.data.message);
        this.setData({
          swiperList:result.data.message
        })
        
      },
    });
      
  }
});
  