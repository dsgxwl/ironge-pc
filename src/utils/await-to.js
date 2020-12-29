/*
 * @Description: 处理Promise返回中间件
 * @Author: xiawenlong
 * @Date: 2020-12-29 08:29:12
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-29 08:29:29
 */
const to = function(promise) {
  return promise.then(res => [res, null]).catch(err => [null, err])
}
export default to
