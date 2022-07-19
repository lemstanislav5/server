const express = require('express'),
      router = express.Router(),
      fs = require('fs')
//файл необходимый для аутентификации при проверке доменного имени для получения SSH ключа
router.use(express.static('build'));
router.get('/aXdJKgX_MJ5L1NUSbzUd-wnMVj6SZHU40AAhtPTZjIk', (req, res) => {
  console.log(__dirname + '/aXdJKgX_MJ5L1NUSbzUd-wnMVj6SZHU40AAhtPTZjIk')
   res.sendFile(__dirname + '/aXdJKgX_MJ5L1NUSbzUd-wnMVj6SZHU40AAhtPTZjIk');
});

module.exports = router
