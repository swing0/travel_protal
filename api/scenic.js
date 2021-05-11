import request from '@/utils/request'
export default {
  getScenicList(page, limit, scenicObj) {
    return request({
      url: `/scenicservice/scenicfront/getFrontScenicList/${page}/${limit}`,
      method: 'post',
      data: scenicObj
    })
  },
  // 获取景区二级分类
  getAllCategory() {
    return request({
      url: `/scenicservice/category/getAllCategory`,
      method: 'get'
    })
  },
  //景区详情的方法
  getScenicInfo(id){
    return request({
      url: `/scenicservice/scenicfront/getFrontScenicInfo/${id}`,
      method: 'get'
    })
  }
}