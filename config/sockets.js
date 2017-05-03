/**
 * WebSocket Server Settings
 * (sails.config.sockets)
 *
 * These settings provide transparent access to the options for Sails'
 * encapsulated WebSocket server, as well as some additional Sails-specific
 * configuration layered on top.
 *
 * For more information on sockets configuration, including advanced config options, see:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.sockets.html
 *
 * 这些配置选项可以透明地访问由Sails封装的WebSocket / pubsub服务器Socket.io。
 *
 */

module.exports.sockets = {


  /***************************************************************************
  *                                                                          *
  * Node.js (and consequently Sails.js) apps scale horizontally. It's a      *
  * powerful, efficient approach, but it involves a tiny bit of planning. At *
  * scale, you'll want to be able to copy your app onto multiple Sails.js    *
  * servers and throw them behind a load balancer.                           *
  *                                                                          *
  * One of the big challenges of scaling an application is that these sorts  *
  * of clustered deployments cannot share memory, since they are on          *
  * physically different machines. On top of that, there is no guarantee     *
  * that a user will "stick" with the same server between requests (whether  *
  * HTTP or sockets), since the load balancer will route each request to the *
  * Sails server with the most available resources. However that means that  *
  * all room/pubsub/socket processing and shared memory has to be offloaded  *
  * to a shared, remote messaging queue (usually Redis)                      *
  *                                                                          *
  * Luckily, Socket.io (and consequently Sails.js) apps support Redis for    *
  * sockets by default. To enable a remote redis pubsub server, uncomment    *
  * the config below.                                                        *
  *                                                                          *
  * Worth mentioning is that, if `adapter` config is `redis`, but host/port  *
  * is left unset, Sails will try to connect to redis running on localhost   *
  * via port 6379                                                            *
  *                                                                          *
  ***************************************************************************/

  /*
  *
  * 队列socket.io将用于传递消息。可以设置为'memory'或'socket.io-redis'。
  * 如果'socket.io-redis'指定了，你应该运行npm install socket.io-redis@~1.0.0 --save --save-exact。
  *
  * */


  //默认值: adapter: 'memory',

  //
  // -OR-
  //

  // adapter: 'socket.io-redis',
  // host: '127.0.0.1',//您的redis实例的主机名。
  // port: 6379,//你的redis实例的端口。
  // db: 0, //要在redis实例中使用的数据库的名称。
  // pass: '<redis auth password>',//您的redis实例的密码。



 /***************************************************************************
  *                                                                          *
  * Whether to expose a 'get /__getcookie' route with CORS support that sets *
  * a cookie (this is used by the sails.io.js socket client to get access to *
  * a 3rd party cookie and to enable sessions).                              *
  *                                                                          *
  * Warning: Currently in this scenario, CORS settings apply to interpreted  *
  * requests sent via a socket.io connection that used this cookie to        *
  * connect, even for non-browser clients! (e.g. iOS apps, toasters, node.js *
  * unit tests)                                                              *
  *                                                                          *
  ***************************************************************************/

  /*
  *
  * 是否公开GET /__getcookie设置仅HTTP会话cookie 的路由。
  * 默认情况下，如果它检测到要连接到跨原始服务器，Sails套接字客户端（sails.io.js）将在开始连接之前向该端点发送JSONP请求。
  * 对于可能使用第三方Cookie的用户代理，这允许sails.io.js使用用户现有的会话cookie（例如，如果已经登录）将套接字连接到跨原始Sails服务器。
  * */
  // grant3rdPartyCookie: true,



  /***************************************************************************
  *                                                                          *
  * `beforeConnect`                                                          *
  *                                                                          *
  * This custom beforeConnect function will be run each time BEFORE a new    *
  * socket is allowed to connect, when the initial socket.io handshake is    *
  * performed with the server.                                               *
  *                                                                          *
  * By default, when a socket tries to connect, Sails allows it, every time. *
  * (much in the same way any HTTP request is allowed to reach your routes.  *
  * If no valid cookie was sent, a temporary session will be created for the *
  * connecting socket.                                                       *
  *                                                                          *
  * If the cookie sent as part of the connection request doesn't match any   *
  * known user session, a new user session is created for it.                *
  *                                                                          *
  * In most cases, the user would already have a cookie since they loaded    *
  * the socket.io client and the initial HTML page you're building.         *
  *                                                                          *
  * However, in the case of cross-domain requests, it is possible to receive *
  * a connection upgrade request WITHOUT A COOKIE (for certain transports)   *
  * In this case, there is no way to keep track of the requesting user       *
  * between requests, since there is no identifying information to link      *
  * him/her with a session. The sails.io.js client solves this by connecting *
  * to a CORS/jsonp endpoint first to get a 3rd party cookie(fortunately this*
  * works, even in Safari), then opening the connection.                     *
  *                                                                          *
  * You can also pass along a ?cookie query parameter to the upgrade url,    *
  * which Sails will use in the absence of a proper cookie e.g. (when        *
  * connecting from the client):                                             *
  * io.sails.connect('http://localhost:1337?cookie=smokeybear')              *
  *                                                                          *
  * Finally note that the user's cookie is NOT (and will never be) accessible*
  * from client-side javascript. Using HTTP-only cookies is crucial for your *
  * app's security.                                                          *
  *                                                                          *
  ***************************************************************************/
  /*
  *
  * 每次新的客户端套接字尝试连接到可以用于拒绝或允许传入连接的服务器时运行的功能。
  * 有助于调整生产环境以防止DoS攻击，或者基于业务特定的启发式拒绝socket.io连接
  * （例如，如果来自竞争业务的stooges创建机器人以在聊天室中发布关于其商业产品的垃圾链接）。
  * 要定义自己的自定义逻辑，请指定以下功能：
  * beforeConnect: function (handshake, cb) {
  *  //pass back true to allow, false to deny
  *  return cb(null, true);
  *  }
  *  从Sails v0.11起，Sails不再阻止没有Cookie的传入套接字连接，而是自动授予Cookie（以及必要会话）。
  *  如果一个请求的socket.io客户端不能接收到一个cookie（即制作一个跨原始的套接字。sails.io.jsio连接）
  *  套接字客户端将自动发送一个CORS + JSONP请求，尝试获取一个之前的连接（grant3rdPartyCookie有关详细信息，请参阅该选项）。
  *  在这种对抗性情况下，即使这种情况发生，Sails仍然会在连接时给予新的cookie，这样可以进行一次会话。
  *
  * */


  // beforeConnect: function(handshake, cb) {
  //   // `true` allows the connection
  //   return cb(null, true);
  //
  //   // (`false` would reject the connection)
  // },


  /***************************************************************************
  *                                                                          *
  * `afterDisconnect`                                                        *
  *                                                                          *
  * This custom afterDisconnect function will be run each time a socket      *
  * disconnects                                                              *
  *                                                                          *
  ***************************************************************************/
  /*
  *
  * 客户端套接字与服务器断开连接时运行的功能。
  * 要定义自己的自定义逻辑，请指定一个函数afterDisconnect: function (session, socket, cb) {}。
  *
  * */


  // afterDisconnect: function(session, socket, cb) {
  //   // By default: do nothing.
  //   return cb();
  // },

  /***************************************************************************
  *                                                                          *
  * `transports`                                                             *
  *                                                                          *
  * A array of allowed transport methods which the clients will try to use.  *
  * On server environments that don't support sticky sessions, the "polling" *
  * transport should be disabled.                                            *
  *                                                                          *
  ***************************************************************************/
  /*
  * 一系列允许的运输策略。这应该始终与您的套接字客户端（即sails.io.js）中的配置相匹配。有关帮助，请参阅配置sails.io.js库。
  * */
  // transports: ["polling", "websocket"]

};
