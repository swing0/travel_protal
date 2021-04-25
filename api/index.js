import request from '@/utils/request'
export default {
    //查询热门景区景点
    getIndexData() {
        return request({
        url: `/scenicservice/indexfront/index`,
        method: 'get'
        })
    }
}