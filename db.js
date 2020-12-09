/* 
封装db，数据库方法---promise
*/
function db(sql, params = null) {
  // 引入mysql模块
  const mysql = require("mysql");
  // 创建连接对象
  const conn = mysql.createConnection({
    // 连接地址
    host: "localhost",
    // 端口号
    port: 3306,
    // 用户名
    user: "root",
    // 密码
    password: "root",
    // 数据库
    database: "big-event",
  });

  // 返回promise对象给db方法
  return new Promise((resolve, reject) => {
    // 连接数据库
    conn.connect();
    // 操作数据库
    conn.query(sql, params, (err, result) => {
      // if (err) {
      //   reject(err)
      // } else {
      //   resolve(result)
      // }
      // 上述代码精简如下
      err ? reject(err) : resolve(result);
    });
    // 关闭连接
    conn.end();
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = db;
