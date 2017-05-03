/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 *
 * 您的Sails应用程序中的记录器配置。
 * 当您调用函数sails.log.debug()或sails.log.error()应用程序代码时，以及Sails如何自动将信息记录到控制台时，
 * 这些设置将适用。这里的选项通常在config / log.js配置文件中指定。
 *
 *
 */

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/

  //默认值: level: 'info'
  // 设置要显示在应用程序日志中的详细程度

  //默认值: inspect: true
  // 设置为false以禁用队长的日志处理日志记录，而是将日志传递给配置的自定义日志记录器

  //默认值: custom: undefined
  // 指定对自定义记录器（例如winston）的实例的引用。
  // 如果提供，而不是直接登录到控制台，则将调用由自定义记录器公开的功能，并将传递来自Sails的日志消息。
  // 有关更多信息，请参阅captains -log。

};

/*
*
*
*
* 使用自定义记录器

 ＃
 配置自定义记录器有时会很有用 - 特别是对于合规性和组织要求（例如，如果您的公司在其他应用程序中使用特定的记录器）。在Sails的上下文中，配置自定义记录器还允许您截取所有由框架自动创建的日志消息，可用于设置有关错误和警告的电子邮件通知。

 但是，不要觉得你有，如果你想这些各种各样的通知使用自定义的记录！实际上，通常会有更简单的方法来实现诸如自动化Slack，SMS或电子邮件通知之类的功能。例如，一种方法是自定义应用程序的默认服务器错误响应（responses/serverError.js）。另一个受欢迎的选择是使用像AppDynamics或NewRelic这样的监控服务。
 以下是将winston配置为自定义记录器的示例，定义了控制台传输和文件传输：
*
* */
/*
*
*
// config/log.js

 var winston = require('winston');
 var customLogger = new winston.Logger();

 // A console transport logging debug and above.
 customLogger.add(winston.transports.Console, {
 level: 'debug',
 colorize: true
 });

 // A file based transport logging only errors formatted as json.
 customLogger.add(winston.transports.File, {
 level: 'error',
 filename: 'filename.log',
 json: true
 });

 module.exports.log = {
 // Pass in our custom logger, and pass all log levels through.
 custom: customLogger,
 level: 'silly',

 // Disable captain's log so it doesn't prefix or stringify our meta data.
 inspect: false
 };
* */

