//引入封装好的异步请求
import { request } from "../../request/index.js";

//页面初始数据
Page({
  data: {
    // 轮播图数组
    swiperList:[],
    //分类导航数组
    navList:[],
    // 楼层数据
    floorList:[]
  },

  //页面加载
  onLoad(){
    this.getSwiperList()
    this.getNavList()
    this.getFloorList()
  },

  //获取轮播图数据
  getSwiperList(){
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     // console.log(result);
    //     // console.log(result.data.message);
    //     this.setData({
    //       swiperList:result.data.message
    //     })
        
    //   },
    // }); 
    request({url:'/home/swiperdata'})   
    .then(result=>{
      this.setData({
        swiperList:result
      })
    })
  },

  //获取分类导航数据
  getNavList(){
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
    //   success: (result) => {
    //     // console.log(result);
    //     this.setData({
    //       navList:result.data.message
    //     })
    //   },
    // });
    request({url:'/home/catitems'})
    .then(res=>{
      this.setData({
        navList:res
      })
    })
  },

  //获取楼层数据
  getFloorList(){
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
    //   success: (result) => {
    //     console.log(result);
    //     this.setData({
    //       floorList:result.data.message
    //     })
    //   },
    // });
    request({url:'/home/floordata'})
    .then(res=>{
      this.setData({
        floorList:res
      })
    })
  }
});
  