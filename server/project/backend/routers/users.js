//子路由

//引入模块
const express = require("express");
const query = require('../db/mysql');
const { create, verify } = require("./token");
const Router = express.Router();  //路由设置

const bodyParser = require("body-parser");

let urlencodedParser = bodyParser.urlencoded({ extended: false });


//验证用户名是否存在
Router.get('/checkname', async (req, res) => {
    // console.log(req);
    let { name } = req.query;
    if (name) {
        let sql = `SELECT * FROM users WHERE username='${name}'`;
        let data = await query(sql);
        let result = {};
        if (data.length) {
            result = {
                type: 0,
                msg: '不能注册'
            }
        } else {
            result = {
                type: 1,
                msg: '可以注册'
            }
        }
        res.send(result); //无论失败与成功都需要响应给客户端

    }
    res.send('数据不能为空');
});

//注册功能
Router.post('/reg', urlencodedParser, express.json(), async (req, res) => {
    // let obj = req.body;
    console.log(req.body);
    let { name, password } = req.body;//解构
    // console.log(name, password );
    if (name && password) {
        let sql = `INSERT INTO users(username,password) VALUES('${name}','${password}')`;
        let data = await query(sql);
        // console.log(data);
        let result = {};
        if (data.affectedRows) {
            //插入成功
            result = {
                type: 1,
                msg: '注册成功'
            }
        } else {
            //插入失败
            result = {
                type: 0,
                msg: '注册失败'
            }
        }
        res.send(result);
    } else {
        res.send('请填写全部数据');
    }

});


//登录功能
Router.get('/login', urlencodedParser, async (req, res) => {
    let { name, password, keep } = req.query;
    // console.log(name,password,keep);
    if (name && password) {
        let sql = `SELECT * FROM users WHERE username='${name}' AND  password='${password}'`;
        let data = await query(sql);
        // console.log(data[0].uid)
        let result = {};
        if (data.length) {
            let token = '';
            if (keep) {
                token = create(password);
                // console.log(token);
            }
            result = {
                type: 1,
                msg: '登录成功',
                name,
                id:data[0].uid,
                token
            }
        } else {
            result = {
                type: 0,
                msg: '登录失败',
                token:''
            }
        }
        res.send(result); //无论失败与成功都需要响应给客户端

    }
    res.send('数据不能为空');
});

//效验token:1.是否被串改 2.是否在有效期
Router.get('/ver', (req, res) => {
    let { token } = req.query;
    let result = verify(token);
    let data = {};
    if (result) {
        data = {
            type: 1,
            msg: "效验通过"
        }
    } else {
        data = {
            type: 0,
            msg: "效验失败"
        }
    }
    res.send(data);
});

module.exports = Router;