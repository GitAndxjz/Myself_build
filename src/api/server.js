import axios from "axios";
import { notification } from "antd";
import $$ from "cmn-utils";
// 创建axios实例
const headers = (function () {
  let token = $$.getStore("token");
  return token ? { Auth: token } : {};
})();
const service = axios.create({
  baseURL: "",
  timeout: 15000, // 请求超时时间
  headers,
});
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

service.interceptors.response.use(
  (response) => {
    //请求正常则返回
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else if (response.status === 403) {
      // 未登录或者登陆失效
      return Promise.resolve(response.data);
    }
    notification.error({
      message: response.status,
      description: response.statusText,
    });
  },
  (error) => {
    // 请求错误则向store commit这个状态变化
    const httpError = {
      hasError: true,
      status: error.response.status,
      statusText: error.response.statusText,
      info: codeMessage[error.response.status] || "",
    };
    notification.error({
      message: httpError.status,
      description: httpError.statusText,
      info: codeMessage[error.response.status] || "",
    });
    return Promise.reject(error);
  }
);

export default service;
