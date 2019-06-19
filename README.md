# 挣闲钱
> 挣闲钱 用户端

## Prerequisite
* Node.js >= `8.0.0`
* [WePY](https://github.com/Tencent/wepy)
* [微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)

## 目录结构
```
.
├── package.json                    # 项目总体信息，依赖列表
├── package-lock.json               # 依赖 lock
├── project.config.json             # 小程序部分设置项
├── README.md                       # 介绍页
├── src                             # 小程序源代码部分
│   ├── app.wpy                     # 小程序入口
│   ├── assets                      # 静态资源
│   │   └── ...
│   ├── components                  # 复用组件
│   │   └── ...
│   ├── lib                         # 杂项库
│   │   ├── cookieJar.js            # cookie库
│   │   └──  request.js             # http 请求库
│   ├── style                       # scss 全局变量
│   │   ├── iconfont.wxss           # iconfont 资源
│   │   └── weui.wxss               # weui 样式库
│   ├── mixins                      # 混合组件
│   │   └── ...
│   └── pages                       # 小程序页面
│       ├── index.wpy               # 主页
│       ├── issue.wpy               # 任务发布页面
│       ├── user                    # 用户
│       │   ├── mine.wpy            # 我的 页面
│       │   ├── info.wpy            # 信息修改 页面
│       │   └── auth.wpy            # 身份认证 页面
│       ├── task                    # task
│       │   ├── task.wpy            # 任务 页面
│       │   ├── issued.wpy          # 我的已发布 页面
│       │   ├── received.wpy        # 我的已接受 页面
│       │   └── detail.wpy          # 任务 页面
│       └── question                # 调查问卷发布页面
│           └── wjx.wpy             # 问卷星发布 页面
└── wepy.config.js                  # wepy 构建配置
```

## 构建

### 编译

```bash
npm i
wepy build # or 'wepy build --watch'
```

此时生成的小程序源码已在`./dist`下生成。

### 构建

使用微信开发者工具进行构建。代码目录选择`./dist`，填上appId后即可。

然后就可以使用开发者工具进行编译与手机预览。
