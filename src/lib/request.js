import wepy from 'wepy'

const request = (object) => {
  let promise = new Promise((resolve, reject) => {
    wepy.request({
      url: object.url,
      data: object.data,
      method: object.method,
      header: {
        'content-type': 'applicction/x-www-form-urlencoded'
      },
      success: res => {
        if (res.statusCode == 200) {
          resolve(res)
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