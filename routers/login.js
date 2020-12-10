
const express = require('express');
const router = express.Router();
module.exports =router

const jwt =require('jsonwebtoken');
const db = require('../../big-event-server/db');

// 登录的接口
router.post('/login' , async(req,res) =>{

    // 假设账号是admin，密码是111111
    if(req.body.username ==='admin' &&  req.body.password ==='111111'){
     
         req.json({
             status:0,
             message:'登录成功',

            token: 'Bearer ' + jwt.sign({username: 'admin', age: 20}, 'bigevent-9760', {expiresIn: 2000})
        })

    }else{
        res.json({
            "status":1,
            "message":"登录失败"
        })
    }
})

// 注册
// 收集数据
// insert into 插入数据

router.post('/reguser',async(req,res) =>{

    // 进行密码的md5加密
  req.body.password = utility.md5(req.body.password)
  let r = await db("insert into user set ?", req.body)


  if(r && r.affect > 0){
      res.json({
          "status":0,
          "message":"注册成功"
      })
  }else{
      res.json({
          "status":1,
          "message":"注册失败"
      })
  }
})

module.exports = router