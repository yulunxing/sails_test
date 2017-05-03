/**
 * Cross-Origin Resource Sharing (CORS) Settings
 * (sails.config.cors)
 *
 * CORS is like a more modern version of JSONP-- it allows your server/API
 * to successfully respond to requests from client-side JavaScript code
 * running on some other domain (e.g. google.com)
 * Unlike JSONP, it works with POST, PUT, and DELETE requests
 *
 * For more information on CORS, check out:
 * http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
 *
 * Note that any of these settings (besides 'allRoutes') can be changed on a per-route basis
 * by adding a "cors" object to the route configuration:
 *
 * '/get foo': {
 *   controller: 'foo',
 *   action: 'bar',
 *   cors: {
 *     origin: 'http://foobar.com,https://owlhoot.com'
 *   }
 *  }
 *
 *  For more information on this configuration file, see:
 *  http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.cors.html
 *
 * 配置Sails 内置的跨源资源共享支持。CORS指定如何处理来自外部域的应用程序对您的应用程序的HTTP请求。
 * 它主要用于允许第三方网站向您的应用发出AJAX请求，这些请求通常遵循同源策略的浏览器阻止。
 这些选项通常在config / cors.js配置文件中设置。请注意，这些设置（除了allRoutes）可以在config / routes.js文件中的每个路由基础上进行更改。
 *
 */

module.exports.cors = {

  /***************************************************************************
  *                                                                          *
  * Allow CORS on all routes by default? If not, you must enable CORS on a   *
  * per-route basis by either adding a "cors" configuration object to the    *
  * route config, or setting "cors:true" in the route config to use the      *
  * default settings below.                                                  *
  *                                                                          *
  ***************************************************************************/

  // 默认值: allRoutes: false,
  // 指示其他CORS配置设置是否应适用于应用程序中的每个路由。

  /***************************************************************************
  *                                                                          *
  * Which domains which are allowed CORS access? This can be a               *
  * comma-delimited list of hosts (beginning with http:// or https://) or    *
  * "*" to allow all domains CORS access.                                    *
  *                                                                          *
  ***************************************************************************/
  /*
  *
  * 以逗号分隔的默认主机列表（以http：//或https：//开头），以访问或*允许所有域CORS访问。
  * 如果allRoutes是true和origin是*，那么你的应用程序将是托管在外部域（除了有自己的CORS设置路由）的网站完全无障碍。
  * 如果credentials是true这样，这意味着您的应用程序将不受保护，以防止利用您登录的用户的跨原始攻击。
  * 以这种方式暴露的任何路由必须小心，不要执行敏感操作或返回安全数据！
  * */

  // 默认值: origin: '*',

  /***************************************************************************
  *                                                                          *
  * Allow cookies to be shared for CORS requests?                            *
  *                                                                          *
  ***************************************************************************/

  //默认值:  credentials: true,
  // 指示是否可以在CORS请求中共享Cookie。

  /***************************************************************************
  *                                                                          *
  * Which methods should be allowed for CORS requests? This is only used in  *
  * response to preflight requests (see article linked above for more info)  *
  *                                                                          *
  ***************************************************************************/

  //默认值:  methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  // 允许在CORS请求中使用的逗号分隔的方法列表。这仅用于响应预检要求，因此，GET，POST，OPTIONS和HEAD（尽管是惯例）并不是必需的。

  /***************************************************************************
  *                                                                          *
  * Which headers should be allowed for CORS requests? This is only used in  *
  * response to preflight requests.                                          *
  *                                                                          *
  ***************************************************************************/

  //默认值: headers: 'content-type'
  // 允许使用CORS请求发送的逗号分隔的头文件列表。这仅用于响应预检要求。

  //默认值: exposeHeaders: ''
  // 浏览器将被允许访问的标题列表。请参阅access-control-exposed-headers。

  //默认值:  securityLevel: 0
  // 指示Sails应如何响应来自不允许的来源的请求。
  // 在正常模式（0）中，Sails正常处理所有请求，只需设置相应的CORS头并将其留给客户端来确定如何处理响应。
  // 在高模式（1）中，如果起点以http或https开头，Sails将向不允许的来源发送403请求。
  // 在非常高的模式（2）中，Sails将发送403响应来自不允许的来源的请求，而不管源协议如何。
  // 有关更多信息，请参阅CORS概念文档中的安全级别。

};
