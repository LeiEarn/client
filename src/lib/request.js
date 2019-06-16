import wepy from 'wepy'
import cookieJar from './cookieJar'

const request = (object) => {
  let promise = new Promise((resolve, reject) => {
    wepy.request({
      url: object.url,
      data: object.data,
      method: object.method,
      header: {
        'content-type': 'applicction/x-www-form-urlencoded',
        cookie: cookieJar.take()
      },
      success: res => {
        if (res.statusCode === 200) {
          resolve(res)
          const cookieStr = res.header['Set-Cookie']
          if (cookieStr) cookieJar.put(cookieStr)
        } else {
          reject(res)
        }
      },
      fail: res => {
        reject(res)
      }
    })
  })

  return promise
}

module.exports = {
  request: request
}
