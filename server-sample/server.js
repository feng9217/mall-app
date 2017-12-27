// 通过 node.js 创建一个简单的server
let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader("Content-Type","text/html; charset=utf-8")

  var pathname = url.parse(req,url).pathname
  fs.readFile(pathname.substring(1), function(err, data) {
    if(err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString())
    }
    res.end()
  })
  // inspect 调试模式 将对象转换成字符串输出
  // 可以查看 url 包含的参数
  util.inspect(url.parse(req.url))
  // 要解析完整路径 直接 url.parse("完整路径")
  res.end("请求结束, 开始执行内容")
})

// 监听端口 主机IP 回调
// 也可以直接和上面链式
server.listen(3000, 127.0.0.1, () => {
  // 执行的回调函数
})

// 安装 express
// npm install -g express-genetator
// express --version 查看是否安装成功
// express server 生成项目