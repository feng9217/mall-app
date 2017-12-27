// 模拟调用第三方接口的方法
let http = require('http')
let util = require('util')

http.get('url', (res) => {
  let data = ''
  res.on("data", (chunk) => {
    data += chunk
  })
  res.on("end", () => {
    let result = JSON.parse(data)
    console.log(result.msg)
    util.inspect(result)
  })
})