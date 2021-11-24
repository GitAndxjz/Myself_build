import { routeConfig } from "./route";

// todo
// 支持layout配置？
const layoutConfig = {
  sider: {
    theme: "light",
  },
};

// todo
// 最好支持动态代理
const proxyConfig = {
  enable: process.env.NODE_ENV === "development",
  proxys: {
    "/dev-api": {
      target: "https://beta-api.m.jd.com/api",
      changeOrigin: true,
      pathRewrite: { "^/dev-api": "" },
    },
  },
};

const WokConfig = {
  title: "统一配置中心",
  route: routeConfig,
  proxy: proxyConfig,
  layout: layoutConfig,
};

export { routeConfig, layoutConfig, proxyConfig };

export default WokConfig;
