var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  let data = {
    code: 200,
    mes: "ok",
    res: {
      list: [
        {
          name: "张三",
          age: 28
        }
      ],
      total: 1,
      pageSize: 1,
      pageNum: 10
    }
  }
  res.send(data);
});

module.exports = router;
