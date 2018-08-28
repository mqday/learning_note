# learning_note
It's my learning note .


# 常用状态码
* 200 OK：成功返回状态，对应，GET,PUT,PATCH,DELETE。
* 201 created  - 成功创建。
* 302 Found：重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request。
> 例如在IE中输入http://www.google.com. HTTP服务器会返回304， IE取到Response中Location header的新URL, 又重新发送了一 个 Request.
* 304 Not Modified：代表上次的文档已经被缓存了， 还可以继续使用。
* 400 bad request   - 请求格式错误。
* 401 unauthorized   - 未授权。
403 forbidden   - 鉴权成功，但是该用户没有权限。
404 not found - 请求的资源不存在。
405 method not allowed - 该http方法不被允许。
410 gone - 这个url对应的资源现在不可用。
415 unsupported media type - 请求类型错误。
422 unprocessable entity - 校验错误时用。
429 too many request - 请求过多。
500 Internal Server Error：服务器发生了不可预期的错误。
503 Server Unavailable：服务器当前不能处理客户端的请求，一段时间后可能恢复正常。
