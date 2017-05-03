/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 *
 *
 * 为您的应用程序的基础HTTP服务器配置。这些属性通常在config/http.js配置文件中指定。
 *
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Express middleware to use for every Sails request. To add custom          *
  * middleware to the mix, add a function to the middleware config object and *
  * add its key to the "order" array. The $custom key is reserved for         *
  * backwards-compatibility with Sails v0.9.x apps that use the               *
  * `customMiddleware` config option.                                         *
  *                                                                           *
  ****************************************************************************/
  /*
  *
  * Sails与Express / Connect中间件完全兼容 - 其实就是这样！您将在Sails中编写的大部分代码实际上是中间件; 最着名的是控制器行动和政策。
  * HTTP中间件

   ＃
   Sails还利用一个额外的可配置中间件堆栈来处理HTTP请求。每当您的应用程序收到HTTP请求时，配置的HTTP中间件堆栈按顺序运行。

   在这里阅读默认中间件堆栈。

   请注意，此HTTP中间件堆栈仅用于“真实”HTTP 请求 -对于虚拟请求（例如来自活动Socket.io连接的请求），它将被忽略。
   添加或覆盖HTTP中间件

   ＃
   要配置自定义HTTP中间件功能，请定义一个新的HTTP密钥sails.config.http.middleware.foobar并将其设置为配置的中间件功能，
   然后将字符串名称（“foobar”）添加到您sails.config.http.middleware.order希望在中间件链中运行的数组
   （一个很好的放置它可能就在“cookieParser”之前的位置）：
  *
  * */

  middleware: {

  /***************************************************************************
  *                                                                          *
  * The order in which middleware should be run for HTTP request. (the Sails *
  * router is invoked by the "router" middleware below.)                     *
  *                                                                          *
  ***************************************************************************/

    //一个中间件名称（字符串）的数组，表示应该为所有传入的HTTP请求运行中间件的顺序。
    //默认值: order: [
    //   'startRequestTimer',
    //   'cookieParser',
    //   'session',
    //   'myRequestLogger',
    //   'bodyParser',
    //   'handleBodyParserError',
    //   'compress',
    //   'methodOverride',
    //   'poweredBy',
    //   '$custom',
    //   'router',
    //   'www',
    //   'favicon',
    //   '404',
    //   '500'
    // ],

  /****************************************************************************
  *                                                                           *
  * Example custom middleware; logs each request to the console.              *
  *                                                                           *
  ****************************************************************************/

    // myRequestLogger: function (req, res, next) {
    //     console.log("Requested :: ", req.method, req.url);
    //     return next();
    // }


  /***************************************************************************
  *                                                                          *
  * The body parser that will handle incoming multipart HTTP requests. By    *
  * default as of v0.10, Sails uses                                          *
  * [skipper](http://github.com/balderdashy/skipper). See                    *
  * http://www.senchalabs.org/connect/multipart.html for other options.      *
  *                                                                          *
  * Note that Sails uses an internal instance of Skipper by default; to      *
  * override it and specify more options, make sure to "npm install skipper" *
  * in your project first.  You can also specify a different body parser or  *
  * a custom function with req, res and next parameters (just like any other *
  * middleware function).                                                    *
  *                                                                          *
  ***************************************************************************/

    //默认值: bodyParser: require('skipper')({strict: true})
    // 启用时，只有数组和字典（即JavaScript对象）将在HTTP请求正文中发送时被插值并解析为JSON。
    // 其他值（包括null，true，false这在技术上是JSON兼容的，但在实践中屡见不鲜，数字和双引号包裹字符串），不会被解释为JSON。默认启用。

  },

  /***************************************************************************
  *                                                                          *
  * The number of seconds to cache flat files on disk being served by        *
  * Express static middleware (by default, these files are in `.tmp/public`) *
  *                                                                          *
  * The HTTP static cache is only active in a 'production' environment,      *
  * since that's the only time Express will cache flat-files.                *
  *                                                                          *
  ***************************************************************************/

  //默认值: cache: 31557600000
  // 应用程序在“生产”环境中运行时缓存静态资产的毫秒数。
  // 这些是由Express的静态中间件（默认情况下，这些文件.tmp/public由Grunt编译的隐藏文件夹提供）提供的任何平面文件，如图像，脚本，样式表等。
};
