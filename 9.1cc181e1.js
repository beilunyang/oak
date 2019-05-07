(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/packages/loading/README.md":function(n,o,i){"use strict";i.r(o),o.default="# Loading 加载\n加载动画，防呆处理。\n\n## 使用\n\n在页面 `json` 中引入按钮组件：\n\n```json\n// import in `page.json`:\n\"usingComponents\": {\n  \"oak-loading\": \"path/to/your/oakui/loading/index\"\n}\n```\n\n在页面使用\n```html\n\x3c!-- use in `page.wxml` --\x3e\n<oak-loading isShow />\n```\n\n## 代码演示\n### 基本用法\n`isShow` 控制Loading显示。\n```html\n<oak-loading isShow />\n```\n\n### Loading尺寸\nLoading支持大、中、小三种尺寸，默认为中。\n```html\n<oak-loading isShow />\n<oak-loading isShow size='small' />\n<oak-loading isShow size='large'/>\n```\n\n### 定位方式\n有 绝对定位(`absolute`)和固定定位(`fixed`)两种方式。\n```html\n<oak-loading isShow position='fixed' />\n<oak-loading isShow position='absolute'/>\n```\n\n### Loading颜色\n设置Loading颜色。\n```html\n<oak-loading isShow color='FD7622' />\n```\n\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| isShow | Loading 是否显示 | `Boolean` | `false` |\n| size | Loading尺寸，可选值为 `large`、`small` 或者不设 | `String` | `normal` |\n| position | 定位方式, 可选值为 `fixed`、`absolute` 或者不设  | `String` | - |\n| color | 设置颜色  | `String` | `#FD7622` |\n\n"}}]);