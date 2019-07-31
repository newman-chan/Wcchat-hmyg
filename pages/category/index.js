//导入封装好的发送请求
import { request } from "../../request/index.js";

// pages/category/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //左侧菜单栏
    menuList:[],
    //右侧商品分类
    goodsList:[],
    curren:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getMenuList()
  },

  //获取分类数据
  getMenuList(){
    request({url:'/categories'})
    .then(res=>{
      // console.log(res);
      //map 返回新数组
      let menuList = res.map((v,i)=>({cat_name:v.cat_name,cat_id:v.cat_id}));

      //这是大家电对象里面的children数组
      let goodsList = res[0].children
      this.setData({
        menuList,
        goodsList
      })
    })
  }
})