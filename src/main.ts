import * as https from "https";
import * as queryString from "querystring";

export const translate = (word) => {
  console.log('translate');
  console.log(word);

  const query: string = queryString.stringify({
    q:'hello',
    from: 'en',
    to: 'zh',
    appid: '20201021000595103',
    salt: Math.random(),
    sign: md5()
  })

  const options = {
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: '/api/trans/vip/translate',
    method: 'GET'
  };

  const req = https.request(options, (res) => {
    console.log('状态码:', res.statusCode);
    console.log('请求头:', res.headers);

    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
};