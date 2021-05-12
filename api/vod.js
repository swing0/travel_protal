import request from '@/utils/request'

export default {

  getPlayAuth(vid) {
    return request({
      url: `/tVod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}