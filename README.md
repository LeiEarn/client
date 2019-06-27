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
├── src                             # 小程序源代码部分
│   ├── app.wpy                     # 小程序入口
│   ├── assets                      # 静态资源
│   │   └── ...
│   ├── components                  # 复用组件
│   │   └── ...
│   ├── lib                         # 杂项库
│   │   ├── cookieJar.js            # cookie库
│   │   └──  request.js             # 网络请求库
│   ├── style                       # wxss 全局变量
│   │   ├── iconfont.wxss           # iconfont 资源
│   │   └── weui.wxss               # weui 样式库
│   ├── mixins                      # 混合组件
│   │   └── ...
│   └── pages                       # 小程序页面
│       ├── index.wpy               # 主页
│       ├── authorize.wpy           # 授权页面
│       ├── search.wpy              # 搜索页面
│       ├── about.wpy               # 小程序关于页面
│       ├── user                    # 用户
│       │   ├── mine.wpy            # 我的 页面
│       │   ├── info.wpy            # 信息修改 页面
│       │   ├── prove.wpy           # 身份认证 页面
│       │   ├── balance.wpy         # 余额 页面
│       │   ├── team.wpy            # 组织 页面
│       │   ├── teamdetail.wpy      # 组织详情 页面
│       │   └── setting.wpy         # 设置 页面
│       ├── task                    # task
│       │   ├── task.wpy            # 任务 页面
│       │   ├── published.wpy       # 我的已发布任务 页面
│       │   ├── accepted.wpy        # 我的已接受任务 页面
│       │   ├── detail.wpy          # 任务详情 页面
│       │   ├── accepter.wpy        # 任务的接收者 页面
│       │   ├── job.wpy             # 任务对应工作 页面
│       │   └── jobdetail.wpy       # 工作详情 页面
│       ├── publish                 # 发布
│       |   ├── publish.wpy         # 发布入口 页面
│       |   ├── normaltask.wpy      # 普通任务发布 页面
│       |   └── wjx.wpy             # 问卷星问卷任务发布 页面
|       └── about                   # 关于
|           ├── behaviorItem.wpy    # 用户行为规范
|           ├── privacyItem.wpy     # 隐私权条款
|           └── publishItem.wpy     # 用户发布条例
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

## 注意事项

* 进入开发者工具进行编译时，需要关闭**ES6转ES5**
