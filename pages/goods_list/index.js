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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    
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