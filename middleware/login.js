function auth(context) {
    // console.log("in middleware ~~~ hello")
    // 当前在客户端执行时
    if(!process.server) {
        if(null == localStorage.getItem("token")) {
            context.redirect("/login")
        }
    } else {
    // 是在服务器端执行时,判断 Cookie
    // 服务器端判断登录的代码
    context.redirect("/login")
    }
}
export default auth