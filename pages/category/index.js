//导入封装好的发送请求
import { request } from "../../request/index.js";

/* 
1 页面的初次动态渲染
2 点击左侧菜单 菜单切换选中 同时 右侧的商品内容 切换显示 
  1 绑定点击事件
  2 左侧菜单的激活 在data中的 currentIndex
  3 右侧商品内容 跟着改变
3 切商品内容的时候 需要让右侧的容器的滚动条重新回到顶部吧
  设置滚动条的距离！！！
  1 以前的dom 可以直接操作 滚动条的属性 dom.scrollTop=0 
  2 scroll-view标签的 scrollTop 属性
  3 右侧内容切换的时候 再手动给它赋值即可 
 */

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
    curren:0,
    scrollTop:0,
  },

    // 接口的返回值
  // 如果 这些数据不需要在页面中渲染，那么就没有必要放到data中
  // 因为 小程序中会对data的数据 进行传输 传输到视图层也就是 wxml中
  Cates:[],

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
      this.Cates = res
      let menuList = this.Cates.map((v,i)=>({cat_name:v.cat_name,cat_id:v.cat_id}));

      //这是大家电对象里面的children数组
      let goodsList = this.Cates[0].children
      this.setData({
        menuList,
        goodsList
      })
    })
  },

  //左侧菜单栏点击事件
  handleMenuChange(e){
    // console.log(e.target.dataset);
    const { index } = e.target.dataset
    // console.log(index);
    let goodsList = this.Cates[index].children
    this.setData({
      curren:index,
      goodsList,
      scrollTop:0
    })
    
    
  }
})