//导入封装好的异步发送请求
import { request } from "../../request/index.js";

// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //tabs数组
    tabs:[
      {id:0,title:'综合',isActive:true},
      {id:1,title:'销量',isActive:false},
      {id:2,title:'价格',isActive:false}
    ],
    goodsList:[]
  },

  //全局接口参数
  QueryParams:{
    //关键字
    query:'',
    //分类id
    cid:'',
    //页码
    pagenum: 1,
    //页容量
    pagesize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //// onLoad 页面开始加载的时候触发  形参中可以获取到页面的url参数
  onLoad: function (options) {
    // console.log(options.cid);
    this.QueryParams.cid = options.cid
    // console.log(this.QueryParams.cid);
    this.getGoodsList()
  },

  //获取商品列表数据
  getGoodsList(){
    request({url:'/goods/search',data:this.QueryParams})
    .then(res=>{
      // console.log(res);
      this.setData({
        goodsList:res.goods
      })
    })
  },

  //改变tabs栏标签点击选中效果
  handleTitleChange(e){
    // console.log(e);
    // 获取子组件传递过来得数据
    const {index} = e.detail
    // console.log(index);
    // 获取原数组
    const {tabs} = this.data
    tabs.forEach((v,i)=>i===index? v.isActive=true:v.isActive=false)
    this.setData({
      tabs
    })
    
  }

  
})