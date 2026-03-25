const axios = require('axios');
const fs = require('fs');
const path = require('path');

const images = [
  {"name": "result-xiezheng.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/11385343fbf2b2119313f933c8db72380cd791232001?x-bce-process=image/format,f_auto"},
  {"name": "result-fanchangyu.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/e824b899a9014c086e06e08d022015087bf40ad15edd?x-bce-process=image/format,f_auto"},
  {"name": "result-qimin.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/1c950a7b02087bf40ad1fb0e838f402c11dfa8ec619d?x-bce-process=image/format,f_auto"},
  {"name": "result-gongsunyin.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/2934349b033b5bb5c9ead919478fc239b6003bf3169d?x-bce-process=image/format,f_auto"},
  {"name": "result-qishu.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/8c1001e93901213fb80e98a5d5bb21d12f2eb9383f0f?x-bce-process=image/format,f_auto"},
  {"name": "result-songyan.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/aeb9b7bbc1a7597f3b272057?x-bce-process=image/format,f_auto"},
  {"name": "result-lihuaian.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/d4628535e5dde71190ef8911d6b3d91b9d16fcfacb9d?x-bce-process=image/format,f_auto"},
  {"name": "result-yuqianqian.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cb39dbf92a233ac7160924aa189b9a?x-bce-process=image/format,f_auto"},
  {"name": "result-fanchangning.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/242a1308b2d6e9da411c4557?x-bce-process=image/format,f_auto"},
  {"name": "result-weiyan.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/f703738da9773912b31bce8889459118367adbb4449f?x-bce-process=image/format,f_auto"},
  {"name": "result-suiyuanqing.jpg", "url": "https://bkimg.cdn.bcebos.com/pic/48540923dd54564e9258c8d3c2828b82d158cdbfe19f?x-bce-process=image/format,f_auto"}
];

async function download() {
  for (let img of images) {
    try {
      const res = await axios.get(img.url, { responseType: 'arraybuffer' });
      fs.writeFileSync(path.join(__dirname, 'assets', img.name), res.data);
      console.log(`Downloaded ${img.name}`);
    } catch (e) {
      console.error(`Failed to download ${img.name}: ${e.message}`);
    }
  }
}
download();
