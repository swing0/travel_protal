import request from '@/utils/request'
export default {
    //生成订单
    createOrders(scenicId) {
        return request({
        url: `/torder/order/createOrder/${scenicId}`,
        method: 'post'
        })
    },
    //根据id查询订单信息
    getOrdersInfo(id) {
        return request({
        url: `/torder/order/getOrderInfo/${id}`,
        method: 'get'
        })
    },
}