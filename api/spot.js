import request from '@/utils/request'
export default {
    //分页景点查询
    getSpotList(page,limit) {
      return request({
        url: `/scenicservice/spotfront/getSpotFrontList/${page}/${limit}`,
        method: 'get'
      })
    }
  }