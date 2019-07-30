//封装发送请求

export const request = (params) =>{

    //统一的接口前缀
    const baseUrl = "https://api.zbztb.cn/api/public/v1";

    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result.data.message)
            },
            fail: (error) => {
                reject(error)
            },
        });
          
    })
}