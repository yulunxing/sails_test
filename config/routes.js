/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */
/*
*
* 任何web应用的最基本的特性就是能够拦截发送给一个URL的请求，然后返回一个响应。为了实现这个，你的应用必须能够区分不同的URL。
* 就像大部分web框架一样，Sails提供一个路由器：一种映射URL到控制器和视图的机制。
* Routes就是告诉Sails当面对一条进入的请求是该做些什么的规则。
* 在Sails中有两种主要类型的路由：自定义(或者“明确的”)和自动的(或者“不明确的”)。
*
* */
/*
*
* 自定义路由
* Sails让你自己用你自己喜欢的方法设计你的app的URLs--也就是没有框架限制。
* 每一个Sails的工程都带有config/routes.js，一个简单的Node.js module，可以到处一个自定义的对象或者明确的routes。
* 比如，下面的这个routes.js文件定义了6条路由；它们有些指向一个控制器的动作，其他的一些直接指向视图。
* */
/*
*
// config/routes.js
 module.exports.routes = {
 'get /signup': { view: 'conversion/signup' },
 'post /signup': 'AuthController.processSignup',
 'get /login': { view: 'portal/login' },
 'post /login': 'AuthController.processLogin',
 '/logout': 'AuthController.logout',
 'get /me': 'UserController.profile'
 }
* */
/*
*
* 每一条route都包含一个地址(最左边的字符串，比如“get /me”)和一个目的地(最右边的字符串，比如'UserController.profile')。这个地址是一个URL路径并且(可选地)带有一个专用的HTTP方法。目标可以被定义为各种不同的方法(参考the expanded concepts section on the subject](http://sailsjs.org/documentation/concepts/Routes/RouteTargetSyntax.html)t)，但是上面的两种不同的方法是最常见的。当Sails收到一条请求时，它会检测所有自定义的路由的**地址**并找到匹配的那条。如果匹配的路由找到了那么将会将这条请求传给**目标**。

 比如，我们读取'get /me': 'UserController.profile'会是这样子的：

 "Hey Sails, when you receive a GET request to http://mydomain.com/me, run the profile action of UserController, would'ya?"
 如果我们想改变路由本身自己的视图布局时该怎么办？很简单，只需这样：

 'get /privacy': {
 view: 'users/privacy',
 locals: {
 layout: 'users'
 }
 },
*
* */
/*
*自动化的路由
* 除了你自定义的路由，Sails还自动地帮你绑定了许多路由。
* 如果一条URL不匹配任何自定义的路由，它可能会匹配上自动路由中的一条，那么还是会生成一条响应的。在Sails中主要类型的自动化路由如下：
Blueprint routes，提供一个完整的REST API给你的controllers和models；
Assets： 比如图片、JS和CSS文件
CSRF： 如果打开的话，将会在你的app中提供一条/csrdfToken路由，这样可以用于取回CSRF token。

支持的协议
Sails路由器是“protocol-agnostic”；
它知道如何处理通过Websockets的HTTP请求和消息。
它通过监听Socket.io消息来实现，该消息以一种简单的格式发送给保留的event handlers，该格式称为JWR(JSON-Websocket Request/Response)。
详细说明和实现参考现在可用的文档client-side socket SDK。

注意
高级用户也许会完全地绕过路由器然后直接地发送底层的完全自定义的WebSocket消息给底层的Socket.io服务器。
你可以在你的app的onConnect函数(位于config/sockets.js文件中)中直接绑定你的套接字事件。
但是记住在大部分的情况下，你最好放弃利用请求拦截器来进行套接字通信--因为在HTTP和WebSockets之间维护一直的路由会让你的app变得更加可维护性。
* */


module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
