  //   获取分类
  var dbConfig = require('../util/dbconfig')
  getCate = (req, res) => {
      var sql = 'select * from cate';
      var sqlArr = [];
      var callback = (err, data) => {
          if (err) {
              console.log('连接出错')
          } else {
              res.send({
                  'list': data
              })
          }
      }
      dbConfig.sqlConnect(sql, sqlArr, callback)

  }
  //  获取指定分类的文章列表
  getPostCate = (req, res) => {
      let {
          id
      } = req.query;
      var sql = 'select * from post where cate_id=?';
      let sqlArr = [id]
      var callback = (err, data) => {
          if (err) {
              console.log('连接出错')
          } else {
              res.send({
                  'list': data
              })
          }
      }
      dbConfig.sqlConnect(sql, sqlArr, callback)
  }

  module.exports = {
      getCate,
      getPostCate
  }