import request from '@/utils/request'

export default {
  //登录
  submitLoginUser(userInfo) {
    return request({
      url: `/tcenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },
  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/tcenter/member/getMemberInfo`,
      method: 'get'
    })
  }
}