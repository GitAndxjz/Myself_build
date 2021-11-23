// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//     console.log(app)
//     app.use(proxy('/public', {
//         target: yourHost,
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//             "^/public": "/"
//         }
//     }))
// }