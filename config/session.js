/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.session.html
 *
 * Sails会话集成在很大程度上依赖于Express和Connect已经完成的伟大工作，
 * 还增加了一些自己的特殊调味汁来将Socket.io与Connect会话商店统一起来。
 * 它使用Connect的cookie解析器来标准化Express和Socket.io之间的配置差异，
 * 并将它们挂接到Sails的请求解释器中，以允许Sails req.session 在处理来自Socket.io的虚拟请求时自动访问和自动保存代码所做的更改。
 * 这意味着您只需编写req.session 以Express或Connect方式使用的代码即可。
 *
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: 'edac3f347e6a545bdc76935ba834036a',
  //创建新应用时会自动生成此会话密钥。
  // 任何时候，这个秘密在生产中都会改变，这样做会使用户的sesssion cookies无效，迫使他们重新登录。
  // 请注意，这也被用作签名Cookie的“cookie secret”。


  /***************************************************************************
  *                                                                          *
  * Set the session cookie expire time The maxAge is set by milliseconds,    *
  * the example below is for 24 hours                                        *
  *                                                                          *
  ***************************************************************************/

  // cookie: {
  //   maxAge: 24 * 60 * 60 * 1000
  // },
  // 会话cookie的选项。有关更多信息，请参阅快速会话文档。 https://github.com/expressjs/session#cookie

  /***************************************************************************
  *                                                                          *
  * Uncomment the following lines to set up a Redis session store that can   *
  * be shared across multiple Sails.js servers.                              *
  *                                                                          *
  * Requires connect-redis (https://www.npmjs.com/package/connect-redis)     *
  *                                                                          *
  ***************************************************************************/

  //默认值: adapter: 'redis',
  // 如果未指定，Sails将使用底层会话中间件中捆绑的默认内存存储。
  // 在生产中，应该指定可扩展会话存储的包名称（例如connect-redis）。详见下文。

  /***************************************************************************
  *                                                                          *
  * The following values are optional, if no options are set a redis         *
  * instance running on localhost is expected. Read more about options at:   *
  *                                                                          *
  * https://github.com/visionmedia/connect-redis                             *
  *                                                                          *
  ***************************************************************************/
  /*
  *在生产中，您应该配置可以跨多个服务器共享的会话存储。
  * 为此，您需要设置sails.config.session.adapter，设置会话数据库，然后添加特定于您正在使用的Connect会话适配器的任何其他配置。
  *
  *在生产中，您应该配置可以跨多个服务器共享的会话存储。
  * 为此，您需要设置sails.config.session.adapter，设置会话数据库，然后添加特定于您正在使用的Connect会话适配器的任何其他配置。
  *
  * 以下设置是可选的，因为如果没有提供redis adapter配置，则Sails假定您希望使用运行的redis实例localhost。
  *
  * */

  // host: 'localhost',
  // port: 6379,
  // ttl: <redis session TTL in seconds>,
  // db: 0,
  // pass: <redis auth password>,
  // prefix: 'sess:',


  /***************************************************************************
  *                                                                          *
  * Uncomment the following lines to set up a MongoDB session store that can *
  * be shared across multiple Sails.js servers.                              *
  *                                                                          *
  * Requires connect-mongo (https://www.npmjs.com/package/connect-mongo)     *
  * Use version 0.8.2 with Node version <= 0.12                              *
  * Use the latest version with Node >= 4.0                                  *
  *                                                                          *
  ***************************************************************************/

  // adapter: 'mongo',
  // url: 'mongodb://user:password@localhost:27017/dbname', // user, password and port optional
  // 如果未指定，Sails将使用底层会话中间件中捆绑的默认内存存储。
  // 在生产中，应该指定可扩展会话存储的包名称（例如connect-redis）。详见下文。

  /***************************************************************************
  *                                                                          *
  * Optional Values:                                                         *
  *                                                                          *
  * See https://github.com/kcbanner/connect-mongo for more                   *
  * information about connect-mongo options.                                 *
  *                                                                          *
  * See http://bit.ly/mongooptions for more information about options        *
  * available in `mongoOptions`                                              *
  *                                                                          *
  ***************************************************************************/

  // collection: 'sessions',
  // stringify: true,
  // mongoOptions: {
  //   server: {
  //     ssl: true
  //   }
  // }

};
