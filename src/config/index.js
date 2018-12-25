const domainDEV = 'adpanshi.cn'; // 测试环境
const domainPRO = 'sxpanshi.com'; // 生产环境

let domain = '';
const fullCurrentDomain = window.location.href;

if (fullCurrentDomain.indexOf(domainDEV) > -1) {
  domain = `http://gnxjd-api.${domainDEV}`;
} else if (fullCurrentDomain.indexOf(domainPRO) > -1) {
  domain = `http://api.${domainPRO}:90`;
} else {
  domain = 'http://rap2api.taobao.org/app/mock/122269/'; // 本地rap接口
}

export {
  domain,
}
// global.config = {
//   version: 'v1.0 beta', // 当前版本号
//   pageSize: 15, // 列表单页数据条数
//   listSize: 10, // 页面内多个列表数据条数
//   enablePageTabs: true, // 是否开启标签页面
//   mutiLanguage: false, // 是否开启多语言
//   defaultLanguage: 'cn', // 默认语言 cn en id 只有在开启mutiLanguage下有效
//   requestUrl: `${domain}/gnxjdApi/doCallAdmin`, // 请求地址
//   exportExcel: `${domain}/gnxjdApi/exportExcel`, // Excel导出地址
//   dateFormat: 'YYYY-MM-DD',
// };