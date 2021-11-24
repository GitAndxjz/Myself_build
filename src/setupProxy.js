const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use("/dev-api", function (req, res, next) {
    // console.log(req.headers.origin);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Cookie,Set-Cookie,x-requested-with,content-type"
    );
    res.header(
      "Access-Control-Allow-Credentials",
      true
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
  });
  app.use(
    "/dev-api/gen",
    createProxyMiddleware({
      target: "http://11.50.58.182:8080/", // 线上域名
      changeOrigin: true,
      pathRewrite: { "^/dev-api/gen": "" },
    })
  );
  app.use(
    "/dev-api",
    createProxyMiddleware({
      target: "http://10.170.158.192:8081/", // 线上域名
      changeOrigin: true,
      pathRewrite: { "^/dev-api": "" },
    })
  );
  app.use("/service-api", function (req, res, next) {
   res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Cookie,Set-Cookie,x-requested-with,content-type"
    );
    res.header(
      "Access-Control-Allow-Credentials",
      true
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
  });
  app.use(
    "/service-api",
    createProxyMiddleware({
      target: "http://11.17.248.70/", // 线上域名
      changeOrigin: true,
      pathRewrite: { "^/service-api": "" },
    })
  );
};
