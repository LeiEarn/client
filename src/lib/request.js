import wepy from 'wepy';
import cookieJar from './cookieJar';
import {resolve as urlResolve} from 'url';

const request = (object) => {
  let promise = new Promise((resolve, reject) => {
    wepy.request({
      url: urlResolve(wepy.$appConfig.baseUrl, object.url),
      data: JSON.stringify(object.data),
      method: object.method,
      header: {
        cookie: cookieJar.take()
      },
      success: res => {
        if (res.statusCode === 200) {
          resolve(res);
          const cookieStr = res.header['Set-Cookie'];
          if (cookieStr) cookieJar.put(cookieStr);
        } else {
          reject(res);
        }
      },
      fail: res => {
        reject(res);
      }
    });
  });

  return promise;
};

module.exports = {
  request: request
};
