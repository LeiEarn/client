import wepy from 'wepy'

const post = (object) => {
  let promise = new Promise((resolve, reject) => {
    wepy.request({
      url: object.url,
      data: object.data,
      method: 'POST',
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

const get = (url) => {
  let promise = new Promise((resolve, reject) => {
    wepy.request({
      url: url,
      header: {
        'content-type': 'applicction/x-www-form-urlencoded'
      },
      method: 'GET',
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
  post: post,
  get: get
}