const mysql = require('mysql')

module.exports = {
    //数据库配置
    config: {
        host: 'localhost',
        port: '3306',
        user: 'zhao',
        password: '123456',
        database: 'zhao',
    },
    //连接数据库
    sqlConnect: function (sql, sqlArr, callback) {
        var pool = mysql.createPool(this.config)
        pool.getConnection((err, conn) => {
            console.log('1234')
            if (err) {
                console.log('连接失败')
                return;
            }
            // 事件驱动回调
            conn.query(sql,sqlArr,callback)
            // 释放连接
            conn.release()
        })
    }
}