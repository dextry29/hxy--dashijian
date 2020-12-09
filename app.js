// 引入
const path = require("path");

const express = require("express");

const app = express();
app.listen(3007, () => console.log("大事件服务已开启了"));

app.use("/api", require(path.join(__dirname, "routers", "login")));

app.use("/my/article", require(path.join(__dirname, "routers", "article")));

app.use("/my", require(path.join(__dirname, "routers", "user")));

app.use("/my/article", require(path.join(__dirname, "routers", "category")));

app.use("/my/article", require(path.join(__dirname, "routers", "article")));

// 错误配置
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    console.log(err.message);
    res.join({
      status: 1,
      message: "身份认证失败！",
    });
   }
});

